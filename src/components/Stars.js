import React, { useEffect, useRef } from 'react';
import './Stars.css';

const Stars = () => {
  const starsRef = useRef(null);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const lastMouseXRef = useRef(0);
  const lastMouseYRef = useRef(0);
  const velocityXRef = useRef(0);
  const velocityYRef = useRef(0);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      
      // Calculate velocity based on movement speed
      const deltaX = currentX - lastMouseXRef.current;
      const deltaY = currentY - lastMouseYRef.current;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // Update velocity (faster movement = higher velocity)
      // Multiply by 1.5 for more responsive movement
      velocityXRef.current = deltaX * 1.5;
      velocityYRef.current = deltaY * 1.5;
      
      // Limit max velocity for smoothness (increased for faster effect)
      const maxVelocity = 100;
      velocityXRef.current = Math.max(-maxVelocity, Math.min(maxVelocity, velocityXRef.current));
      velocityYRef.current = Math.max(-maxVelocity, Math.min(maxVelocity, velocityYRef.current));
      
      mouseXRef.current = currentX;
      mouseYRef.current = currentY;
      lastMouseXRef.current = currentX;
      lastMouseYRef.current = currentY;
    };

    const animate = () => {
      if (starsRef.current) {
        const stars = starsRef.current.querySelectorAll('.star');
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Calculate offset from center
        const offsetX = (mouseXRef.current - centerX) / centerX;
        const offsetY = (mouseYRef.current - centerY) / centerY;
        
        // Apply velocity for speed effect
        const speedMultiplier = Math.sqrt(
          velocityXRef.current * velocityXRef.current + 
          velocityYRef.current * velocityYRef.current
        ) / 10;
        
        stars.forEach((star, index) => {
          const depth = (index % 3) + 1; // Different depths for parallax
          // Increased multipliers for more dramatic effect
          const parallaxX = offsetX * depth * 30 + velocityXRef.current * depth * speedMultiplier * 1.5;
          const parallaxY = offsetY * depth * 30 + velocityYRef.current * depth * speedMultiplier * 1.5;
          
          star.style.transform = `translate(${parallaxX}px, ${parallaxY}px)`;
        });
        
        // Decay velocity for smooth stop (slower decay = longer effect)
        velocityXRef.current *= 0.97;
        velocityYRef.current *= 0.97;
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Generate stars
  const generateStars = () => {
    const stars = [];
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const opacity = Math.random() * 0.8 + 0.2;
      const twinkleDelay = Math.random() * 3;
      
      stars.push(
        <div
          key={i}
          className="star"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: opacity,
            animationDelay: `${twinkleDelay}s`,
          }}
        />
      );
    }
    
    return stars;
  };

  return (
    <div ref={starsRef} className="stars-container">
      {generateStars()}
    </div>
  );
};

export default Stars;

