
import  { useState } from 'react';
import ParentComponent from './ParentComponent';

const Main = () => {
const [message, setMessage] = useState('Hello from App!');
return <ParentComponent message={message} />;
};
export default Main;
