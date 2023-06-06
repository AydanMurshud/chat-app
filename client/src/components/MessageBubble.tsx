interface MessageBubbleProps {
  message: {
    user: string;
    message: string;
  };
}
const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  return (
    <div>
      <h3>{message.user}</h3>
      <h1>{message.message}</h1>
    </div>
  );
};
export default MessageBubble;
