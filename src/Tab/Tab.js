import './Tab.css';

const Tab = (props) => {
  return (
    <div className="tab" onClick={e => props.changeTab(props.tabName, props.minutes)}>
      <span>{props.tabName}</span>
    </div>
  );
}

export default Tab;