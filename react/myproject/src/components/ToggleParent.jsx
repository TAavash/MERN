import { useState } from 'react';
import ToggleChild from './ToggleChild';

const ToggleParent = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <ToggleChild isToggled={isToggled} />
      <button className='bg-blue-700 text-white' onClick={toggleSwitch}>Toggle Switch</button>
    </div>
  );
};

export default ToggleParent;
