import React, { useEffect, useRef } from "react";
import "./StarfieldBackground.css";

const StarfieldBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const stars = useRef([]);
  const mouse = useRef({ x: 0, y: 0, isMoving: false });
  const mouseMoveTimeout = useRef(null);
  const STAR_COUNT = 500; // More stars for swarm effect
  const ATTRACTION_STRENGTH = 0.007; // Slower attraction strength
  const ORBITAL_SPEED = 0.05; // Speed of circular orbit

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const c = canvas.getContext("2d");
    if (!c) return;

    // Set initial canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize stars with positions and velocities
    stars.current = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, // Initial random velocity x
        vy: (Math.random() - 0.5) * 0.5, // Initial random velocity y
        baseX: Math.random() * canvas.width, // original position
        baseY: Math.random() * canvas.height, // original position
        angle: Math.random() * Math.PI * 2, // Random starting angle for orbit
        driftAngle: Math.random() * Math.PI * 2, // Angle for continuous drift
      });
    }

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handlePointerMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.isMoving = true;
      
      // Clear existing timeout
      if (mouseMoveTimeout.current) {
        clearTimeout(mouseMoveTimeout.current);
      }
      
      // Set mouse as not moving after 100ms of no movement
      mouseMoveTimeout.current = setTimeout(() => {
        mouse.current.isMoving = false;
      }, 100);
    };

    const update = () => {
      if (!canvas || !c) return;
      
      const w = canvas.width;
      const h = canvas.height;

      // Clear canvas with black background
      c.fillStyle = "#000000";
      c.fillRect(0, 0, w, h);

      // Update and draw stars
      stars.current.forEach((star) => {
        // Calculate direction to mouse
        const dx = mouse.current.x - star.x;
        const dy = mouse.current.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // All stars follow mouse when it's moving
        if (mouse.current.isMoving && distance > 5) {
          // Calculate angle to mouse
          const angleToMouse = Math.atan2(dy, dx);
          
          // Update orbital angle for circular motion (each star has its own phase)
          star.angle += ORBITAL_SPEED;
          
          // Create circular orbit pattern - perpendicular force (tangential)
          // This creates the circular/swirling motion
          const tangentialAngle = angleToMouse + Math.PI / 2 + star.angle; // Perpendicular + phase
          const tangentialForce = ATTRACTION_STRENGTH * 3;
          
          // Apply tangential (circular) force - this makes stars orbit
          star.vx += Math.cos(tangentialAngle) * tangentialForce;
          star.vy += Math.sin(tangentialAngle) * tangentialForce;
          
          // Add slight radial attraction to keep stars near mouse (but weaker)
          star.vx += dx * ATTRACTION_STRENGTH * 0.2;
          star.vy += dy * ATTRACTION_STRENGTH * 0.2;
        } else {
          // Continuous drift movement when mouse is not moving
          star.driftAngle += 0.01; // Slowly change drift direction
          const driftSpeed = 0.15;
          star.vx += Math.cos(star.driftAngle) * driftSpeed * 0.01;
          star.vy += Math.sin(star.driftAngle) * driftSpeed * 0.01;
          
          // Also add slight attraction to base position to prevent stars from drifting too far
          const returnDx = star.baseX - star.x;
          const returnDy = star.baseY - star.y;
          star.vx += returnDx * 0.005; // Very gentle return
          star.vy += returnDy * 0.005;
        }

        // Apply velocity with stronger damping for slower movement
        star.vx *= 0.96;
        star.vy *= 0.96;
        star.x += star.vx;
        star.y += star.vy;

        // Keep stars within bounds
        if (star.x < 0 || star.x > w) {
          star.x = Math.max(0, Math.min(w, star.x));
          star.vx *= -0.5;
        }
        if (star.y < 0 || star.y > h) {
          star.y = Math.max(0, Math.min(h, star.y));
          star.vy *= -0.5;
        }

        // Draw slightly bigger star with slight glow
        const size = 0.8; // Slightly bigger stars
        const brightness = 0.9;
        
        // Outer glow
        c.beginPath();
        c.fillStyle = `rgba(255, 255, 255, ${brightness * 0.2})`;
        c.arc(star.x, star.y, size * 2, 0, Math.PI * 2);
        c.fill();
        
        // Main star
        c.beginPath();
        c.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        c.arc(star.x, star.y, size, 0, Math.PI * 2);
        c.fill();
      });

      animationFrameRef.current = requestAnimationFrame(update);
    };

    // Start animation
    update();

    // Add event listeners
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("mousemove", handlePointerMove);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (mouseMoveTimeout.current) {
        clearTimeout(mouseMoveTimeout.current);
      }
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handlePointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield-canvas" />;
};

export default StarfieldBackground;

