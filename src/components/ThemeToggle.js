import React, { useState, useEffect, useRef } from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const themes = [
    { id: 'morning', name: 'Morning', icon: '☀️' },
    { id: 'night', name: 'Night', icon: '🌙' },
    { id: 'stars', name: 'Stars', icon: '⭐' },
    { id: 'snowfall', name: 'Snowfall', icon: '❄️' },
    { id: 'rain', name: 'Rain', icon: '🌧️' },
  ];

  const currentThemeData = themes.find(t => t.id === currentTheme) || themes[0];
  const currentIndex = themes.findIndex(t => t.id === currentTheme);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Focus management when opening dropdown
  useEffect(() => {
    if (isOpen) {
      setFocusedIndex(currentIndex >= 0 ? currentIndex : 0);
      // Focus the dropdown container for keyboard navigation
      setTimeout(() => {
        dropdownRef.current?.focus();
      }, 0);
    }
  }, [isOpen, currentIndex]);

  const handleThemeSelect = (themeId, e) => {
    if (e) {
      e.stopPropagation();
    }
    onThemeChange(themeId);
    setIsOpen(false);
    localStorage.setItem('portfolioTheme', themeId);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleDropdownKeyDown = (e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') {
      setIsOpen(false);
      buttonRef.current?.focus();
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % themes.length);
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev - 1 + themes.length) % themes.length);
      return;
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const theme = themes[focusedIndex] || themes[0];
      handleThemeSelect(theme.id, e);
      return;
    }
  };

  return (
    <div className="theme-toggle">
      <button
        ref={buttonRef}
        className="theme-toggle-button"
        onClick={handleButtonClick}
        aria-label="Change theme"
        title={currentThemeData.name}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="theme-icon">{currentThemeData.icon}</span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="theme-dropdown"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={handleDropdownKeyDown}
          tabIndex={0}
          role="menu"
          aria-label="Select theme"
        >
          {themes.map((theme, index) => (
            <button
              key={theme.id}
              type="button"
              className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
              onClick={(e) => handleThemeSelect(theme.id, e)}
              role="menuitemradio"
              aria-checked={currentTheme === theme.id}
              data-focused={focusedIndex === index ? 'true' : 'false'}
            >
              <span className="theme-option-icon">{theme.icon}</span>
              <span className="theme-option-name">{theme.name}</span>
              {currentTheme === theme.id && (
                <i className="fas fa-check"></i>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;

