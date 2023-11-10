'use client';

import React, { useState, useEffect } from 'react';

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => {
    setIsActive(true);
  };

  useEffect(() => {
    let timer;

    if (isActive) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
            setIsActive(false);
            // add additional logic for what happens when the timer reaches 0
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isActive, minutes, seconds]);
  return (
    <div className="bg-red-100 p-4 flex flex-col items-center">
      <span>
        {String(minutes).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}
      </span>
      <button
        className="bg-red-200 text-white p-2"
        onClick={() => startTimer()}
      >
        Start
      </button>
    </div>
  );
};

export default Pomodoro;
