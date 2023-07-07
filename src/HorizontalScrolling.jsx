import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrolling = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: false
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="overflow-x-hidden" ref={component}>
      <section className="flex flex-col h-screen bg-purple-200 items-center justify-center">
        <h2 className="text-4xl font-bold text-white">Main Section</h2>
      </section>
      <div className="w-[600vw] h-screen flex flex-wrap" ref={slider}>
        <section className="panel w-screen h-screen bg-blue-200 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Section 1</h2>
        </section>
        <section className="panel w-screen h-screen bg-green-200 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Section 2</h2>
        </section>
        <section className="panel w-screen h-screen bg-yellow-200 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Section 3</h2>
        </section>
      </div>
      <section className="flex flex-col h-screen bg-orange-200 items-center justify-center">
        <h2 className="text-4xl font-bold text-white">Final Section</h2>
      </section>
    </div>
  );
};

export default HorizontalScrolling;
