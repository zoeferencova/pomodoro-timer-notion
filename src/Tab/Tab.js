import './Tab.css';

const Tab = (props) => {
  return (
    <div className="tab" onClick={e => props.changeTab(props.index)}>
      <span>{props.tabName}</span>
    </div>
  );
}

export default Tab;