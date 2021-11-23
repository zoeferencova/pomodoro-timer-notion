import './Button.css';

const Button = props => {
  return (
    <div className="button" onClick={props.timerOn ? props.handlePause : props.handleStart}>
      {props.timerPaused ? "Pause" : "Start"}
    </div>
  );
}

export default Button;