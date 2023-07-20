import React, { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const distance = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    const getNearbyStars = (mouseX, mouseY, stars, threshold) =>
      stars.filter(star => distance(mouseX, mouseY, star.x, star.y) < threshold);

    const drawLines = (points, ctx, alpha, lineWidth) => {
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
        }
      }
      ctx.stroke();
    };

    const createStars = (canvas, ctx, numStars) => {
      const stars = [];

      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 1.5;
        stars.push({ x, y, size });
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 1)";
        ctx.fill();
      }

      return stars;
    };

    const numStars = 150;
    const stars = createStars(canvas, ctx, numStars);

    let lines = [];

    const updateStars = stars => {
      for (let star of stars) {
        star.x += (Math.random() - 0.5) * 0.5;
        star.y += (Math.random() - 0.5) * 0.5;

        if (star.x < 0) {
          star.x = canvas.width;
        } else if (star.x > canvas.width) {
          star.x = 0;
        }

        if (star.y < 0) {
          star.y = canvas.height;
        } else if (star.y > canvas.height) {
          star.y = 0;
        }
      }
    };

    const animateLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i];
        drawLines(line.points, ctx, line.alpha, line.lineWidth);
        line.alpha -= 0.01;

        if (line.alpha <= 0) {
          lines.splice(i, 1);
        }
      }

      updateStars(stars);

      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246)";
        ctx.fill();
      }

      requestAnimationFrame(animateLines);
    };

    const randomLineWidth = () => Math.random() * 0.4 + 0.1;

    let mouseX = 0;
    let mouseY = 0;
    const threshold = 60;

    canvas.addEventListener("mousemove", (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;

      const nearbyStars = getNearbyStars(mouseX, mouseY, stars, threshold);
      if (nearbyStars.length > 0) {
        const newLine = { points: nearbyStars, alpha: 0.5, lineWidth: randomLineWidth() };
        lines.push(newLine);
      }
    });

    animateLines();

    return () => {
      canvas.removeEventListener("mousemove", () => {});
    };
  }, []);

  return <canvas ref={ref}/>;
};

export default CanvasBackground