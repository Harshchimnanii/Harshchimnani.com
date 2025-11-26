import React, { useEffect, useState, useRef } from 'react';
import './WeatherTheme.css';

const WeatherTheme = ({ theme, setTheme }) => {
  const containerRef = useRef(null);
  const snowflakesRef = useRef([]);
  const raindropsRef = useRef([]);
  const starsRef = useRef([]);


  // Create snowflakes
  useEffect(() => {
    if (theme === 'snowfall') {
      const createSnowflake = () => {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.animationDelay = Math.random() * 2 + 's';
        snowflake.style.opacity = Math.random();
        containerRef.current?.appendChild(snowflake);
        snowflakesRef.current.push(snowflake);

        setTimeout(() => {
          snowflake.remove();
          snowflakesRef.current = snowflakesRef.current.filter(s => s !== snowflake);
        }, 5000);
      };

      // Create initial snowflakes
      for (let i = 0; i < 50; i++) {
        setTimeout(() => createSnowflake(), i * 100);
      }

      const interval = setInterval(() => {
        createSnowflake();
      }, 300);

      return () => {
        clearInterval(interval);
        snowflakesRef.current.forEach(snowflake => snowflake.remove());
        snowflakesRef.current = [];
      };
    }
  }, [theme]);

  // Create raindrops
  useEffect(() => {
    if (theme === 'rain') {
      const createRaindrop = () => {
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        raindrop.style.left = Math.random() * 100 + '%';
        raindrop.style.animationDuration = Math.random() * 0.5 + 0.3 + 's';
        raindrop.style.animationDelay = Math.random() * 0.5 + 's';
        containerRef.current?.appendChild(raindrop);
        raindropsRef.current.push(raindrop);

        setTimeout(() => {
          raindrop.remove();
          raindropsRef.current = raindropsRef.current.filter(r => r !== raindrop);
        }, 1000);
      };

      // Create initial raindrops
      for (let i = 0; i < 100; i++) {
        setTimeout(() => createRaindrop(), i * 50);
      }

      const interval = setInterval(() => {
        createRaindrop();
      }, 50);

      return () => {
        clearInterval(interval);
        raindropsRef.current.forEach(raindrop => raindrop.remove());
        raindropsRef.current = [];
      };
    }
  }, [theme]);

  // Create stars for night/stars theme
  useEffect(() => {
    if (theme === 'stars' || theme === 'night') {
      const createStar = () => {
        const star = document.createElement('div');
        star.className = 'theme-star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = Math.random() * 2 + 1 + 's';
        containerRef.current?.appendChild(star);
        starsRef.current.push(star);
      };

      // Create stars
      for (let i = 0; i < 100; i++) {
        createStar();
      }

      return () => {
        starsRef.current.forEach(star => star.remove());
        starsRef.current = [];
      };
    }
  }, [theme]);

  return (
    <div ref={containerRef} className={`weather-theme weather-theme-${theme}`}>
      {theme === 'snowfall' && <div className="snow-overlay"></div>}
      {theme === 'rain' && <div className="rain-overlay"></div>}
    </div>
  );
};

export default WeatherTheme;

