
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
      'rgba(255, 255, 255, 0.3)', // Transparent white
      'rgba(211, 228, 253, 0.2)', // Very soft blue
      'rgba(253, 225, 211, 0.2)', // Soft peach
      'rgba(255, 222, 226, 0.2)', // Soft pink
    ];

    // Initialize bubbles
    for (let i = 0; i < BUBBLE_COUNT; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * canvas.height,
        speed: 0.2 + Math.random() * 0.5, // Slightly slower for more floating effect
        size: 3 + Math.random() * 12, // Slightly smaller bubbles
        color: BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)],
        wobbleOffset: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.01 + Math.random() * 0.02, // Gentler wobble
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((bubble) => {
        // Update bubble position with wobble effect
        bubble.y -= bubble.speed;
        bubble.x += Math.sin(bubble.wobbleOffset) * 0.3; // Reduced wobble amplitude
        bubble.wobbleOffset += bubble.wobbleSpeed;

        // Draw bubble with iridescent-like gradient
        const gradient = ctx.createRadialGradient(
          bubble.x - bubble.size * 0.3,
          bubble.y - bubble.size * 0.3,
          0,
          bubble.x,
          bubble.y,
          bubble.size
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)'); // Highlight
        gradient.addColorStop(0.4, bubble.color);
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

