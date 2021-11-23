import { useRef } from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import Button from "../Button/Button"

import './Clock.css';

const Clock = props => {
  const clockRef = useRef();

  const handleStart = () => {
    clockRef.current.start();
    props.startTimer();
  };

  const handlePause = () => {
    clockRef.current.pause();
  };

  return (
    <div className="clock">
      <Countdown date={Date.now() + (1000 * 60 * props.time)} autoStart={false} controlled={false} renderer={(props) => <div>{props.minutes}:{zeroPad(props.seconds)}</div>} ref={clockRef} />
      <Button timerOn={props.timerOn} handlePause={handlePause} handleStart={handleStart} />
    </div>
  );
}

export default Clock;