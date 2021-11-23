import Countdown, { zeroPad } from 'react-countdown';

import './Clock.css';

const Clock = props => {
  return (
    <div className="clock">
      {props.timerOn ?
        <Countdown renderer={props => <div>{props.minutes}:{zeroPad(props.seconds)}</div>} date={Date.now() + (1000 * 60 * props.time)} />
        :
        <div>{props.time}:00</div>
      }
    </div>
  );
}

export default Clock;