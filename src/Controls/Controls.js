import './Controls.css';

const Controls = props => {
  return (
    <div>
      <button type="submit" className="restart-button" onClick={props.handleRestart}>
        Restart
      </button>
      <button type="submit" className="start-pause-button" onClick={props.timerOn ? props.handlePause : props.handleStart}>
        {props.timerOn ? "Pause" : "Start"}
      </button>
      <span>{props.pomodoros}</span>
    </div>
    
  );
}

export default Controls;