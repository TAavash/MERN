import { TestFunctionalProps } from "./TestFunctionalProps";

const FunctionalProps = () => {
  const handleClick = () => {
    alert("Product Booked");
  };
  return (
    <div>
      <TestFunctionalProps onButtonClick={handleClick}/>
    </div>
  );
};

export default FunctionalProps;
