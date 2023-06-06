import { useEffect, useState } from 'react';

import io from 'socket.io-client';
import ChatLogContainer from './components/ChatLogContainer';

const socket = io('http://localhost:3001');
const App = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [value, setValue] = useState('');
  const sendMessage = () => {
    socket.emit('send_message', { message: value, user: 'test user' });
    setMessages([...messages,{message:value,user:'test user'}])
    setValue('');
  };
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  useEffect(() => {
    socket.on('receive', (data) => {
      setMessages([...messages, data]);
    });
  }, [messages]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        height: '80vh',
        alignSelf: 'center',
        justifySelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 'auto',
        padding: 20,
        border: '2px solid black',
      }}
    >
      <ChatLogContainer messages={messages} />
      <label>
        <input
          onChange={onChange}
          type='text'
          value={value}
          placeholder='Your message...'
        />
        <button onClick={sendMessage}>Send Message</button>
      </label>
    </div>
  );
};

export default App;
