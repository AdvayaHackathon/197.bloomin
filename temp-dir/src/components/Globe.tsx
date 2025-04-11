
import React, { useEffect, useRef } from 'react';

const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const updateCanvasDimensions = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    updateCanvasDimensions();
    window.addEventListener('resize', updateCanvasDimensions);

    // Nodes and connections
    const nodes: { x: number; y: number; radius: number; vx: number; vy: number; color: string }[] = [];
    const connections: { from: number; to: number; opacity: number }[] = [];

    // Create nodes
    const createNodes = () => {
      const nodeCount = Math.floor(canvas.width / 15);
      nodes.length = 0;
      connections.length = 0;

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          color: ['#0ea5e9', '#22d3ee', '#8b5cf6'][Math.floor(Math.random() * 3)]
        });
      }

      // Create connections
      for (let i = 0; i < nodes.length; i++) {
        const connectionCount = Math.floor(Math.random() * 3) + 1;
        
        for (let j = 0; j < connectionCount; j++) {
          const target = Math.floor(Math.random() * nodes.length);
          if (i !== target) {
            connections.push({
              from: i,
              to: target,
              opacity: Math.random() * 0.3 + 0.1
            });
          }
        }
      }
    };

    createNodes();
    window.addEventListener('resize', createNodes);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      }

      // Draw connections
      for (const connection of connections) {
        const from = nodes[connection.from];
        const to = nodes[connection.to];

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${connection.opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasDimensions);
      window.removeEventListener('resize', createNodes);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full animate-float-slow"
    />
  );
};

export default Globe;
