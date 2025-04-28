
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
      opacity: number;
    }> = [];

    // Responsive bubble count based on screen size
    const BUBBLE_COUNT = Math.min(Math.max(15, window.innerWidth / 30), 40);
    
    // Soap bubble colors - more iridescent and translucent
   const BUBBLE_COLORS = [
     "rgba(173, 216, 230, 0.4)", // Light Blue (like sky water vibe)
     "rgba(200, 230, 255, 0.3)", // Softer baby blue
     "rgba(220, 240, 255, 0.35)", // Faint pastel blue
     "rgba(180, 220, 250, 0.25)", // Slightly deeper light blue
   ];

    // Initialize bubbles
    for (let i = 0; i < BUBBLE_COUNT; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * canvas.height, // Start below screen
        speed: 0.3 + Math.random() * 0.6, // Slightly faster to be more visible
        size: 5 + Math.random() * 20, // Varied sizes for more visual interest
        color: BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)],
        wobbleOffset: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.01 + Math.random() * 0.02, // Gentle wobble
        opacity: 0.6 + Math.random() * 0.4, // Varied opacity
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((bubble) => {
        // Update bubble position with wobble effect
        bubble.y -= bubble.speed;
        bubble.x += Math.sin(bubble.wobbleOffset) * 0.4;
        bubble.wobbleOffset += bubble.wobbleSpeed;

        // Create soap bubble effect with iridescent gradient
        const gradient = ctx.createRadialGradient(
          bubble.x - bubble.size * 0.3,
          bubble.y - bubble.size * 0.3,
          0,
          bubble.x,
          bubble.y,
          bubble.size
        );
        
        // Create iridescent soap bubble effect
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)'); // Bright highlight
        gradient.addColorStop(0.4, `rgba(255, 255, 255, ${bubble.opacity})`); // Mid with variable opacity
        gradient.addColorStop(0.6, bubble.color); // Color tint
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Fade out edge

        // Draw the bubble
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add a subtle rim/border to enhance soap bubble appearance
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 0.8;
        ctx.stroke();

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
