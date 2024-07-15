import ToggleParent from '../components/ToggleParent';
import CounterParent from '../components/CounterParent';
import MessageParent from '../components/MessageParent';
import Navbar from '../components/Navbar';

const AllComp = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <h1 className='text-3xl'>React Components</h1>
      <div><ToggleParent /></div>
      <div><CounterParent /></div>
      <div><MessageParent /></div>
      
    </div>
  );
};

export default AllComp;
