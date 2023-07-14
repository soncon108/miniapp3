import { useState, useEffect } from "react";
import "./PomodoroClock.css";
function PomodoroClock() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [isWorking, setIsWorking] = useState(false);
  const [isRelaxing, setIsRelaxing] = useState(false);
  const [title, setTitle] = useState();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isWorking && !isPaused) {
      interval = setInterval(() => {
        clearInterval(interval);

        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            setIsWorking(false);
            setIsRelaxing(true);
            setTitle("Time to Relax!");
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (isRelaxing && !isPaused) {
      interval = setInterval(() => {
        clearInterval(interval);

        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            setIsRelaxing(false);
            setIsWorking(true);
            setMinutes(0);
            setSeconds(10);
            setTitle("Time to Work!");
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isWorking, isRelaxing, seconds, minutes, isPaused]);

  const startWorking = () => {
    setIsWorking(true);
    setIsRelaxing(false);
    setMinutes(0);
    setSeconds(10);
    setTitle("Time to Work!");
    setIsPaused(false);
  };

  const startRelaxing = () => {
    setIsRelaxing(true);
    setIsWorking(false);
    setMinutes(0);
    setSeconds(5);
    setTitle("Time to Relax!");
    setIsPaused(false);
  };

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  let [now, setNow] = useState(new Date());
  useEffect(() => {
    const timeout = setTimeout(() => setNow(new Date()), 1000);
    return () => clearTimeout(timeout);
  }, [now]);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <>
      <div className="containerPomodoro">
        <h2>Pomodoro Clock</h2>
        <h3>{title}</h3>
        <div>{now.toLocaleTimeString()}</div>
        <div className="timer">
          {timerMinutes}:{timerSeconds}
        </div>
        <div className="buttonThree">
          <button onClick={handlePause} className="buttonPause">
            Pause
          </button>
          <button onClick={startRelaxing} className="buttonRelax">
            Relax
          </button>
          <button onClick={startWorking} className="buttonWorking">
            Working
          </button>
        </div>
      </div>
    </>
  );
}

export default PomodoroClock;
