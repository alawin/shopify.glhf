"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scene3D } from "./scene-3d";

const chapters = [
  {
    num: "01",
    title: "Sourcing",
    body: "One call triggers verified sourcing. Craft, spec, and delivery window route directly to matched suppliers. No RFQ ping-pong.",
  },
  {
    num: "02",
    title: "Verification",
    body: "Every SKU passes spec compliance, provenance check, and quality gate before it enters your dispatch queue.",
  },
  {
    num: "03",
    title: "Dispatch",
    body: "Route-optimized dispatch from nearest hub. Real-time SKU tracking. Consolidated shipping to cut freight cost.",
  },
  {
    num: "04",
    title: "Delivery",
    body: "Site-ready delivery with QR-tagged manifest. Every crate arrives labeled, sorted, and audit-ready.",
  },
] as const;

export function HeroScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const chaptersWrapRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<number>(0);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(chaptersWrapRef.current, { opacity: 0, y: 30 });
      gsap.set(".chapter-body", { opacity: 0, height: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4500",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            progressRef.current = self.progress;
          },
        },
      });

      // 0.00 – 0.15 : Intro decay
      tl.to(
        headlineRef.current,
        {
          scale: 0.34,
          y: -280,
          x: () => -Math.max(0, window.innerWidth / 2 - 320),
          color: "#94a3b8",
          opacity: 0.55,
          ease: "power2.inOut",
        },
        0
      );
      tl.to(subRef.current, { opacity: 0, y: -40, ease: "power2.in" }, 0);
      tl.to(hintRef.current, { opacity: 0 }, 0);
      tl.to(chaptersWrapRef.current, { opacity: 1, y: 0, ease: "power2.out" }, 0.1);

      // Chapter zones: each 0.20 of scrub timeline, offset by 0.15 intro
      const CHAPTER_LEN = 0.2;
      const INTRO = 0.15;

      chapters.forEach((_, i) => {
        const zoneStart = INTRO + i * CHAPTER_LEN;

        tl.to(
          `.chapter-${i} .chapter-body`,
          { opacity: 1, height: "auto", ease: "power2.out" },
          zoneStart
        );
        tl.to(
          `.chapter-${i} .chapter-num`,
          { backgroundColor: "#ffffff", scale: 1.05, color: "#0a1220" },
          zoneStart
        );
        tl.to(
          `.chapter-${i} .chapter-title`,
          { fontSize: "1.375rem", fontWeight: 700, color: "#0a1220" },
          zoneStart
        );

        if (i > 0) {
          const prev = i - 1;
          tl.to(
            `.chapter-${prev} .chapter-body`,
            { opacity: 0, height: 0, ease: "power2.in" },
            zoneStart
          );
          tl.to(
            `.chapter-${prev} .chapter-num`,
            { backgroundColor: "rgba(255,255,255,0)", scale: 1, color: "#475569" },
            zoneStart
          );
          tl.to(
            `.chapter-${prev} .chapter-title`,
            { fontSize: "1rem", fontWeight: 500, color: "#475569" },
            zoneStart
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-axis-bg"
    >
      {/* 3D Scene layer */}
      <div className="absolute inset-0">
        <Scene3D progressRef={progressRef} />
      </div>

      {/* Headline layer */}
      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1
          ref={headlineRef}
          className="max-w-5xl text-[clamp(2.5rem,9vw,7.5rem)] font-black leading-[0.9] tracking-tight text-axis-navy"
        >
          Industrial supply,
          <br />
          refined.
        </h1>
        <p
          ref={subRef}
          className="mt-8 max-w-xl text-base text-axis-mid md:text-lg"
        >
          AI-driven sourcing. Verified provenance. Route-optimized dispatch —
          engineered for MRO teams that can&apos;t afford downtime.
        </p>
        <div
          ref={hintRef}
          className="mt-12 border-b border-axis-line pb-2 text-[10px] tracking-[0.32em] text-axis-mid"
        >
          SCROLL TO DISCOVER OUR PROCESS
        </div>
      </div>

      {/* Chapter overlay */}
      <div
        ref={chaptersWrapRef}
        className="absolute bottom-8 left-4 z-20 max-w-md md:bottom-16 md:left-16"
      >
        {chapters.map((ch, i) => (
          <div
            key={ch.num}
            className={`chapter chapter-${i} flex items-start gap-4 py-2.5`}
          >
            <span className="chapter-num flex h-8 min-w-8 items-center justify-center rounded-md border border-axis-line px-2 text-xs font-medium text-axis-mid">
              {ch.num}
            </span>
            <div className="flex-1">
              <h3 className="chapter-title text-base font-medium leading-tight text-axis-mid">
                {ch.title}
              </h3>
              <div className="chapter-body overflow-hidden">
                <p className="ml-[-12px] mt-2 max-w-xs border-l-2 border-axis-line pl-3 text-sm leading-relaxed text-axis-mid">
                  {ch.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
