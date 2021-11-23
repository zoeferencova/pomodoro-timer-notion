import Tab from '../Tab/Tab';

import './TabBar.css';

const TabBar = props => {
  return (
    <div className="tab-bar">
      <Tab tabName="Pomodoro" minutes="25" changeTab={props.changeTab} />
      <Tab tabName="Short Break" minutes="5" changeTab={props.changeTab} />
      <Tab tabName="Long Break" minutes="15" changeTab={props.changeTab} />
    </div>
  );
}

export default TabBar;