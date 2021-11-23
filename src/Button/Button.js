import './Button.css';

const Button = props => {
  return (
    <div className="button" onClick={props.startTimer}>
      Start
    </div>
  );
}

export default Button;