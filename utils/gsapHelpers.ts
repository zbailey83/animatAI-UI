
import gsap from "gsap";
import { Draggable } from "gsap/all";

export interface HorizontalLoopTimeline extends gsap.core.Timeline {
    next: (vars?: any) => gsap.core.Tween;
    prev: (vars?: any) => gsap.core.Tween;
    toIndex: (index: number, vars?: any) => gsap.core.Tween;
    times: number[];
    draggable?: Draggable;
}

/*
 * Helper function that creates a seamless loop of elements
 * Based on GreenSock's horizontalLoop helper
 */
export function horizontalLoop(items: any[], config: any): HorizontalLoopTimeline {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => {
            tl.totalTime(tl.rawTime() + tl.duration() * 100);
        }
    }) as HorizontalLoopTimeline,
        length = items.length,
        startX = items[0].offsetLeft,
        times: number[] = [],
        widths: number[] = [],
        xPercents: number[] = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? (v: any) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth: number,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i;

    gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
            let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string);
            xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px") as string) / w * 100 + parseFloat(gsap.getProperty(el, "xPercent") as string));
            return xPercents[i];
        }
    });

    gsap.set(items, { x: 0 });

    totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * parseFloat(gsap.getProperty(items[length - 1], "scaleX") as string) + (parseFloat(config.paddingRight) || 0);

    for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * parseFloat(gsap.getProperty(item, "scaleX") as string);

        tl.to(item, {
            xPercent: snap((curX - distanceToLoop) / widths[i] * 100),
            duration: distanceToLoop / pixelsPerSecond
        }, 0)
            .fromTo(item, {
                xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)
            }, {
                xPercent: xPercents[i],
                duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                immediateRender: false
            }, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);

        times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index: number, vars: any) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }

    tl.next = (vars: any) => toIndex(curIndex + 1, vars);
    tl.prev = (vars: any) => toIndex(curIndex - 1, vars);
    tl.toIndex = (index: number, vars: any) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance

    if (config.reversed) {
        if (tl.vars.onReverseComplete) {
            tl.vars.onReverseComplete();
        }
        tl.reverse();
    }

    if (config.draggable && typeof Draggable === "function") {
        let proxy = document.createElement("div"),
            wrap = gsap.utils.wrap(0, 1),
            ratio: number, startProgress: number, draggable: Draggable, boxWidth: number;

        draggable = Draggable.create(proxy, {
            trigger: items[0].parentNode,
            type: "x",
            onPress: function () {
                startProgress = tl.progress();
                tl.progress(startProgress + 0.0001); // fix for some browsers
                tl.pause();
                // @ts-ignore
                boxWidth = items[0].offsetWidth; // assumes all are same width
                // @ts-ignore
                ratio = 1 / totalWidth;
            },
            onDrag: function () {
                // @ts-ignore
                tl.progress(wrap(startProgress + (this.startX - this.x) * ratio));
            },
            onThrowComplete: function () {
                tl.play();
                // @ts-ignore
                gsap.to(tl, { duration: 1, timeScale: 1, ease: "power1.inOut" }); // restore proper timeScale
            },
            inertia: true, // Requires InertiaPlugin, fall back if not present?
            // @ts-ignore
            snap: function (value) {
                return value;
            },
            onRelease: function () {
                // @ts-ignore
                if (!this.tween || !this.isThrowing) { // if not throwing (inertia plugin missing or minimal movement)
                    tl.play();
                }
            }
        })[0];

        tl.draggable = draggable;
    }

    return tl;
}
