import React, { FC, useEffect, useRef, useState } from 'react';
import { Colors } from '../models/Colors';
import { Player } from '../models/Player';

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void;
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

    function startTimer() {
      if (timer.current) {
        clearInterval(timer.current);
      }
      const callback =
        currentPlayer?.color === Colors.WHITE
          ? decrementWhiteTimer
          : decrementBlackTimer;
      timer.current = setInterval(callback, 1000);
    }

    function decrementBlackTimer() {
      setBlackTime((prev) => prev - 1);
    }
    function decrementWhiteTimer() {
      setWhiteTime((prev) => prev - 1);
    }

    const handleRestart = () => {
      setWhiteTime(300);
      setBlackTime(300);
      restart();
    };

    return (
      <div className="timer">
        <h2>
          <b>Черные - </b>
          {blackTime} сек.
        </h2>
        <h2>
          <b>Белые - </b>
          {whiteTime} сек.
        </h2>
        <div className="btn">
          <button onClick={handleRestart}>Restart game</button>
        </div>
      </div>
    );
};

export default Timer;