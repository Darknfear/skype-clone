import { Container } from './style';
interface IProps {
  className?: string;
}
const Chat: React.FC<IProps> = (props: IProps) => {
  return <Container style={{ background: "yellow" }}>Chat</Container>;
};
export default Chat;
