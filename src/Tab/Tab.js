import './Tab.css';

const Tab = (props) => {
  return (
    <div className="tab" onClick={e => props.changeTab(props.tabName, props.time)}>
      <span>{props.tabName}</span>
    </div>
  );
}

export default Tab;