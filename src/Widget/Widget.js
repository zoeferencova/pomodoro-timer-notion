import { Component, createRef } from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import alarmSound from '../sounds/pomodoro-alarm.mp3';
import tabData from '../tab-settings';
import TabBar from '../TabBar/TabBar';
import Controls from '../Controls/Controls';

import './Widget.css';

let alarm = new Audio(alarmSound);

class Widget extends Component {
  constructor(props) {
    super(props);
    this.clockRef = createRef();
    this.state = {
      currentTab: tabData[0],
      timerOn: false,
      pomodoros: 1,
    }
  }

  changeTab = index => {
    this.clockRef.current.stop();
    this.setState({ timerOn: false, currentTab: tabData[index] });
  }

  handleCompletion = () => {
    this.state.currentTab.tabName === "Pomodoro" && this.setState({ pomodoros: this.state.pomodoros + 1 })
    this.setState({ timerOn: false });
    alarm.play();
    this.state.pomodoros % 4 === 0 && this.state.currentTab.altNext ? this.changeTab(this.state.currentTab.altNext) : this.changeTab(this.state.currentTab.next);
  }

  handleStart = () => {
    this.clockRef.current.start();
    this.setState({ timerOn: true });
  };

  handlePause = () => {
    this.clockRef.current.pause();
    const pausedTime = this.clockRef.current.calcTimeDelta().total;
    this.setState({ timerOn: false, currentTab: { ...this.state.currentTab, time: pausedTime } });
  };

  handleRestart = () => {
    const currentTab = tabData.find(tab => tab.tabName === this.state.currentTab.tabName)
    this.setState({ timerOn: false, currentTab: { ...this.state.currentTab, time: currentTab.time } });
    this.clockRef.current.stop();
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
        <Controls timerOn={this.state.timerOn} handlePause={this.handlePause} handleStart={this.handleStart} handleRestart={this.handleRestart} pomodoros={this.state.pomodoros} />
      </div>
    );
  }
}

export default Widget;


