import { useState, useRef, useEffect } from 'react';

function useTimer(isStarted: boolean) {
  const [elapsedTime, setElapsedTime] = useState(0);
  const startTimeOfTimer = useRef(Date.now());
  useEffect(() => {
    if (!isStarted) {
      setElapsedTime(0);
      startTimeOfTimer.current = Date.now();
    }
    const timerInterval = setInterval(() => {
      const elapsedTimeInMs = Date.now() - startTimeOfTimer.current;
      const elapsedTimeInSeconds = elapsedTimeInMs / 1000;
      setElapsedTime(Math.floor(elapsedTimeInSeconds));
    }, 500);

    return () => {
      clearInterval(timerInterval);
    };
  }, [isStarted, elapsedTime]);
  return { elapsedTime };
}

export { useTimer };
