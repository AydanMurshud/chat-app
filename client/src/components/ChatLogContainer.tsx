import MessageBubble from '../components/MessageBubble';
import { useEffect } from 'react';
interface ChatLogContainerProp {
  messages: any;
}
const ChatLogContainer: React.FC<ChatLogContainerProp> = ({ messages }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
        overflowY: 'scroll',
      }}
    >
      {messages.map((m: any, i: number) => (
        <MessageBubble key={i} message={m} />
      ))}
    </div>
  );
};
export default ChatLogContainer;
