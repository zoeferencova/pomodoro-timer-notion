import Tab from '../Tab/Tab';

import './TabBar.css';

const TabBar = props => {
  return (
    <div className="tab-bar">
      <Tab tabName="Pomodoro" time="25" changeTab={props.changeTab} />
      <Tab tabName="Short Break" time="5" changeTab={props.changeTab} />
      <Tab tabName="Long Break" time="15" changeTab={props.changeTab} />
    </div>
  );
}

export default TabBar;