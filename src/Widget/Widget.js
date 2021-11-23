import { Component } from 'react';

import TabBar from '../TabBar/TabBar';
import Clock from '../Clock/Clock';
import Button from '../Button/Button';

import './Widget.css';

class Widget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: {
        tabName: "pomodoro",
        time: 25
      },
      timerOn: false
    }
  }

  startTimer = () => {
    this.setState({ timerOn: true });
  }

  changeTab = (tabName, time) => {
    this.setState({ timerOn: false })
    this.setState({ currentTab: {tabName, time}});
  }

  render() {
    return (
      <div className="widget">
        <TabBar currentTab={this.state.currentTab.tabName} changeTab={this.changeTab} />
        <Clock time={this.state.currentTab.time} timerOn={this.state.timerOn} />
        <Button startTimer={this.startTimer} />
      </div>
    );
  }
}

export default Widget;
