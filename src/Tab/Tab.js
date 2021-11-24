import './Tab.css';

const Tab = (props) => {
  return (
    
    <div className={`tab tab${props.index} ${props.currentTab === props.tabName && "active"}`} onClick={e => props.changeTab(props.index)}>
      {props.tabName}
      {console.log(props.tabName, props.currentTab)}
    </div>
  );
}

export default Tab;