import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const HexFect = ({ textToAnimate }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [animatedText, setAnimatedText] = useState('');
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    clearInterval(intervalRef.current);

    let iteration = 0;
    intervalRef.current = setInterval(() => {
      setAnimatedText(() =>
        textToAnimate
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return textToAnimate[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join('')
      );

      if (iteration >= textToAnimate.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 2;
    }, 30);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [textToAnimate,isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{animatedText}</div>;
};

HexFect.propTypes = {
  textToAnimate: PropTypes.string.isRequired,
};

export default HexFect;
