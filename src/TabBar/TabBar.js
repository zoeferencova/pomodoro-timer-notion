import Tab from '../Tab/Tab';

import './TabBar.css';

const TabBar = props => {
  return (
    <div className="tab-bar">
      <Tab tabName="Pomodoro" time={1500000} changeTab={props.changeTab} />
      <Tab tabName="Short Break" time={300000} changeTab={props.changeTab} />
      <Tab tabName="Long Break" time={900000} changeTab={props.changeTab} />
    </div>
  );
}

export default TabBar;