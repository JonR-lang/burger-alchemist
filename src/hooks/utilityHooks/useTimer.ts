import { useState, useEffect, useRef } from "react";

const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalIdRef = useRef<number | undefined>(undefined);

  const startTimer = () => {
    if (intervalIdRef.current !== undefined) {
      clearInterval(intervalIdRef.current);
    }
    intervalIdRef.current = window.setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalIdRef.current !== undefined) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = undefined;
    }
  };

  useEffect(() => {
    return () => {
      if (intervalIdRef.current !== undefined) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  return { timer, startTimer, stopTimer };
};

export default useTimer;
