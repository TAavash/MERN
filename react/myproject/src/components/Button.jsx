const Button = () => {
    const handleClick = () => {
        alert('Product Booked');}
  return (
    <div>
      <button onClick={handleClick} className="w-[100px] h-[50px] p-[10px] bg-blue-700 text-white hover:bg-slate-700">
        Button
      </button>
    </div>
  );
};

export default Button;
