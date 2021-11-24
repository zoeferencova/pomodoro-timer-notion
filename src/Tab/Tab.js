import './Tab.css';

const Tab = (props) => {
  return (
    <div className="tab" onClick={e => props.changeTab(props.index)}>
      {props.tabName}
    </div>
  );
}

export default Tab;