import { useState } from 'react';
import CounterChild from './CounterChild';

const CounterParent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='flex gap-2'>
      <CounterChild count={count} />
      <button className='bg-red-500' onClick={increment}>+ Increment</button>
      <button className='bg-red-500' onClick={decrement}>Decrement -</button>
    </div>
  );
};

export default CounterParent;
