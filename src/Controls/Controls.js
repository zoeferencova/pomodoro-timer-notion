import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './Controls.css';

const Controls = props => {
  return (
    <div className="controls">
      <button type="submit" className="restart-button" onClick={props.handleRestart}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button type="submit" className="start-pause-button" onClick={props.timerOn ? props.handlePause : props.handleStart}>
        {props.timerOn ? "Pause" : "Start"}
      </button>
      <span className="pomodoros">{props.pomodoros}</span>
    </div>
    
  );
}

export default Controls;