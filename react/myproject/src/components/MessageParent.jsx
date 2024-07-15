import { useState } from 'react';
import MessageChild from './MessageChild';

const MessageParent = () => {
  const [message, setMessage] = useState('');

  const updateMessage = () => {
    setMessage('New message updated!');
  };

  return (
    <div>
      <MessageChild message={message} />
      <button className='bg-green-500' onClick={updateMessage}>Update Message</button>
    </div>
  );
};

export default MessageParent;
