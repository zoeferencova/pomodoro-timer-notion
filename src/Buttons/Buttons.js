import './Buttons.css';

const Buttons = props => {
  return (
    <div>
      <button type="submit" className="restart-button" onClick={props.timerOn ? props.handlePause : props.handleRestart}>
        Restart
      </button>
      <button type="submit" className="start-pause-button" onClick={props.timerOn ? props.handlePause : props.handleStart}>
        {props.timerOn ? "Pause" : "Start"}
      </button>
    </div>
    
  );
}

export default Buttons;