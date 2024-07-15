const TestFunctionalProps = (onButtonClick) => {
  return (
    <div>
      <button
        onClick={onButtonClick}
        className="w-[100px] h-[50px] p-[10px] bg-blue-700 text-white hover:bg-slate-700"
      >
        Button
      </button>
    </div>
  );
};

export default TestFunctionalProps;
