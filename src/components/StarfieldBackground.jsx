import React, { useEffect, useRef } from "react";
import "./StarfieldBackground.css";

// Slow 3D starfield that lives ONLY behind the hero/header.
// A gentle scroll-driven warp adds motion as you leave the hero, but the
// canvas is one viewport tall so it never affects readability below.
const StarfieldBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const MAX_DEPTH = 1400;
    const palette = ["#ffffff", "#ffffff", "#ffffff", "#cbe3ff", "#f3d0ff", "#b8f4ff"];

    let w = 0, h = 0, cx = 0, cy = 0, dpr = 1, focal = 1;
    let stars = [];
    let raf = 0;
    let scrollVel = 0;
    let lastScrollY = window.scrollY || window.pageYOffset || 0;
    const baseSpeed = reduced ? 0.05 : 0.16; // slow, calm drift

    const makeStar = (randomZ) => ({
      x: (Math.random() - 0.5) * w * 1.7,
      y: (Math.random() - 0.5) * h * 1.7,
      z: randomZ ? Math.random() * MAX_DEPTH + 1 : MAX_DEPTH,
      px: 0,
      py: 0,
      init: false,
      color: palette[(Math.random() * palette.length) | 0],
    });

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      cx = w / 2;
      cy = h / 2;
      focal = Math.min(w, h) * 0.9;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.min(1, (w * h) / (1920 * 1080));
      const count = Math.round((reduced ? 150 : 460) * (0.45 + density * 0.65));
      stars = new Array(count).fill(0).map(() => makeStar(true));

      ctx.fillStyle = "#05060f";
      ctx.fillRect(0, 0, w, h);
    };

    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      const d = y - lastScrollY;
      lastScrollY = y;
      if (reduced) return;
      scrollVel += d * 0.55;
      if (scrollVel > 620) scrollVel = 620;
      if (scrollVel < -620) scrollVel = -620;
    };
    const onWheel = (e) => {
      if (reduced) return;
      scrollVel += e.deltaY * 0.35;
      if (scrollVel > 620) scrollVel = 620;
      if (scrollVel < -620) scrollVel = -620;
    };

    const frame = () => {
      const speed = baseSpeed + scrollVel;
      const absSpeed = Math.abs(speed);

      const trailAlpha = Math.max(0.14, 0.32 - absSpeed * 0.0006);
      ctx.fillStyle = `rgba(5,6,15,${trailAlpha})`;
      ctx.fillRect(0, 0, w, h);

      scrollVel *= 0.9;
      if (Math.abs(scrollVel) < 0.01) scrollVel = 0;

      ctx.lineCap = "round";

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.z -= speed;

        if (s.z < 1) {
          const ns = makeStar(false);
          ns.z = MAX_DEPTH;
          stars[i] = ns;
          continue;
        }
        if (s.z > MAX_DEPTH) {
          const ns = makeStar(false);
          ns.z = 1;
          stars[i] = ns;
          continue;
        }

        const f = focal / s.z;
        const sx = cx + s.x * f;
        const sy = cy + s.y * f;
        const depth = 1 - s.z / MAX_DEPTH;
        const size = Math.max(0.4, depth * 2.2);
        const alpha = Math.min(1, depth * 1.4 + 0.15);

        if (!s.init) {
          s.px = sx;
          s.py = sy;
          s.init = true;
        }

        ctx.globalAlpha = alpha;
        ctx.strokeStyle = s.color;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(s.px, s.py);
        ctx.lineTo(sx, sy);
        ctx.stroke();

        ctx.globalAlpha = Math.min(1, alpha + 0.2);
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(sx, sy, size * 0.6, 0, Math.PI * 2);
        ctx.fill();

        s.px = sx;
        s.py = sy;
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    };

    resize();
    frame();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield-canvas" aria-hidden="true" />;
};

export default StarfieldBackground;
