import { Component, createRef } from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import alarmSound from '../sounds/pomodoro-alarm.mp3';

import TabBar from '../TabBar/TabBar';
import Controls from '../Controls/Controls';

import './Widget.css';

let alarm = new Audio(alarmSound);

class Widget extends Component {
  constructor(props) {
    super(props);
    this.clockRef = createRef();
    this.state = {
      currentTab: {
        tabName: "pomodoro",
        time: 1500000
      },
      timerOn: false,
      pomodoros: 0,
    }
  }

  changeTab = (tabName, time) => {
    this.clockRef.current.stop();
    this.setState({ timerOn: false, currentTab: {tabName, time} });
  }

  handleCompletion = () => {
    this.setState({ timerOn: false })
    alarm.play();
  }

  handleStart = () => {
    this.clockRef.current.start();
    this.setState({ timerOn: true });
  };

  handlePause = () => {
    this.clockRef.current.pause();
    const pausedTime = this.clockRef.current.calcTimeDelta().total;
    this.setState({ timerOn: false, currentTab: { time: pausedTime } });
  };

  handleRestart = () => {
    this.clockRef.current.stop();
    this.setState({ timerOn: false });
    this.clockRef.current.start();
  }

  render() {
    return (
      <div className="widget">
        <TabBar currentTab={this.state.currentTab.tabName} changeTab={this.changeTab} />
        <Countdown 
          date={Date.now() + (this.state.currentTab.time)} 
          autoStart={false} 
          controlled={false} 
          renderer={(props) => <div>{props.minutes}:{zeroPad(props.seconds)}</div>} 
          ref={this.clockRef}
          onComplete={this.handleCompletion}>
        </Countdown>
        <Controls timerOn={this.state.timerOn} handlePause={this.handlePause} handleStart={this.handleStart} handleRestart={this.handleRestart} />
      </div>
    );
  }
}

export default Widget;


