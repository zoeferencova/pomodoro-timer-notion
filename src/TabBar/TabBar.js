import tabData from '../tab-settings';
import Tab from '../Tab/Tab';

import './TabBar.css';

const TabBar = props => {
  return (
    <div className="tab-bar">
      {tabData.map((tab, i) => <Tab key={i} index={i} currentTab={props.currentTab} tabName={tab.tabName} time={tab.time} changeTab={props.changeTab}></Tab>)}
    </div>
  );
}

export default TabBar;