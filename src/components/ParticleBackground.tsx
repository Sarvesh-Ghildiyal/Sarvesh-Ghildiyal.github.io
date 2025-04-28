
import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Bubble configuration
    const bubbles: Array<{
      x: number;
      y: number;
      speed: number;
      size: number;
      color: string;
      wobbleOffset: number;
      wobbleSpeed: number;
    }> = [];

    const BUBBLE_COUNT = Math.min(window.innerWidth * 0.05, 50); // Fewer bubbles for better performance
    const BUBBLE_COLORS = [
      'rgba(155, 135, 245, 0.2)', // Light purple
      'rgba(211, 228, 253, 0.2)', // Soft blue
      'rgba(214, 188, 250, 0.2)', // Light purple
      'rgba(229, 222, 255, 0.2)', // Soft purple
    ];

    // Initialize bubbles
    for (let i = 0; i < BUBBLE_COUNT; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * canvas.height, // Start below screen
        speed: 0.3 + Math.random() * 0.7,
        size: 5 + Math.random() * 15,
        color: BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)],
        wobbleOffset: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.02 + Math.random() * 0.03,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((bubble) => {
        // Update bubble position with wobble effect
        bubble.y -= bubble.speed;
        bubble.x += Math.sin(bubble.wobbleOffset) * 0.5;
        bubble.wobbleOffset += bubble.wobbleSpeed;

        // Draw bubble with gradient
        const gradient = ctx.createRadialGradient(
          bubble.x,
          bubble.y,
          0,
          bubble.x,
          bubble.y,
          bubble.size
        );
        gradient.addColorStop(0, bubble.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Reset bubble when it goes off screen
        if (bubble.y < -bubble.size) {
          bubble.y = canvas.height + bubble.size;
          bubble.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticleBackground;

