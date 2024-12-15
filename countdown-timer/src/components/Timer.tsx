import { useEffect, useState, useRef } from "react";
import { duration } from "../utils/consts/time";

function Timer() {
  const [time, setTime] = useState(duration);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isActive && time > 0) {
      intervalRef.current = setTimeout(() => {
        setTime((prevTime) => prevTime - 1000);
      }, 1000);
    } else if (time <= 0) {
      setTime(0);
      setIsActive(false);
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
    }
  };

  const handleRestart = () => {
    setIsActive(false);
    setTime(duration);
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
    }
  };

  function formatTime(time: number) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${String(days).padStart(2, "0")}:${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  return (
    <div className="timer-container">
      <h1 className="header">Time Remaining</h1>
      <h2 className="timer">{formatTime(time)}</h2>
      <div className="timer_button-container">
        <button className="timer_button-blue" onClick={handleRestart}>
          Restart
        </button>
        <button className="timer_button-orange" onClick={handlePause}>
          Pause
        </button>
        <button className="timer_button-green" onClick={handleStart}>
          Start
        </button>
      </div>
    </div>
  );
}

export default Timer;
