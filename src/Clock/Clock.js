import { useRef } from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import Buttons from "../Buttons/Buttons"

import './Clock.css';

const Clock = props => {
  const clockRef = useRef();

  const handleStart = () => {
    clockRef.current.start();
    props.startTimer();
  };

  const handlePause = () => {
    clockRef.current.pause();
    const currentTime = clockRef.current.calcTimeDelta()
    props.pauseTimer(currentTime.total);
  };

  return (
    <div className="clock">
      <Countdown date={Date.now() + (props.time)} autoStart={false} controlled={false} renderer={(props) => <div>{props.minutes}:{zeroPad(props.seconds)}</div>} ref={clockRef} />
      <Buttons timerOn={props.timerOn} handlePause={handlePause} handleStart={handleStart} />
    </div>
  );
}

export default Clock;