import ChildComponent from "./ChildComponent";
const ParentComponent = ({ message }) => {
  return <ChildComponent message={message} />;
};
export default ParentComponent;
