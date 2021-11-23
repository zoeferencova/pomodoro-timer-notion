import { Component } from 'react';

import TabBar from '../TabBar/TabBar';
import Clock from '../Clock/Clock';

import './Widget.css';

class Widget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: {
        tabName: "pomodoro",
        time: 25
      },
      timerOn: false,
    }
  }

  startTimer = () => {
    this.setState({ timerOn: true });
  }

  changeTab = (tabName, time) => {
    this.setState({ currentTab: {tabName, time}, timerOn: false});
  }

  render() {
    return (
      <div className="widget">
        <TabBar currentTab={this.state.currentTab.tabName} changeTab={this.changeTab} />
        <Clock time={this.state.currentTab.time} timerOn={this.state.timerOn} startTimer={this.startTimer} pauseTimer={this.pauseTimer} />
      </div>
    );
  }
}

export default Widget;
