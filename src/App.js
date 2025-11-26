import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Stars from './components/Stars';
import WeatherTheme from './components/WeatherTheme';
import WelcomeScreen from './components/WelcomeScreen';
// LandingPage removed per new loading screen requirement

function App() {
  const [theme, setTheme] = useState('morning');
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // On load, detect theme using actual weather; fallback to time of day
    initThemeByWeather();
  }, []);

  const isNight = () => {
    const hour = new Date().getHours();
    return hour < 6 || hour >= 18;
  };

  const mapWeatherCodeToTheme = (code) => {
    // Open-Meteo weather codes
    const snowCodes = [71, 72, 73, 75, 77, 85, 86];
    const rainCodes = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99];
    const clearCodes = [0, 1, 2, 3];

    if (snowCodes.includes(code)) return 'snowfall';
    if (rainCodes.includes(code)) return 'rain';

    // Non-precipitation conditions: choose night/day visuals
    if (isNight()) {
      // Clear night -> stars, otherwise night
      return clearCodes.includes(code) ? 'stars' : 'night';
    }
    return 'morning';
  };

  const detectThemeByTime = () => {
    setTheme(isNight() ? 'night' : 'morning');
  };

  const initThemeByWeather = async () => {
    try {
      if (!('geolocation' in navigator)) {
        detectThemeByTime();
        return;
      }

      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 60_000,
        });
      });

      const { latitude, longitude } = position.coords;
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=weather_code&timezone=auto`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Weather API error');
      const data = await res.json();
      const code = data?.current?.weather_code;
      if (typeof code === 'number') {
        const nextTheme = mapWeatherCodeToTheme(code);
        setTheme(nextTheme);
      } else {
        detectThemeByTime();
      }
    } catch (err) {
      // Fallback to simple time-based theme
      detectThemeByTime();
    }
  };

  // Manual theme change removed; theme adjusts automatically based on time

  const handleEnterWebsite = () => {
    setShowWelcome(false);
  };

  // Landing page removed

  return (
    <>
      {showWelcome && <WelcomeScreen onEnter={handleEnterWebsite} />}
      {!showWelcome && (
        <div className="App">
          <WeatherTheme theme={theme} setTheme={setTheme} />
          {theme === 'stars' && <Stars />}
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

