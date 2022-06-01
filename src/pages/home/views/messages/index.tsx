import { Container } from "./style";

interface IProps {
    className?: string;
}
const Messages: React.FC<IProps> = (props: IProps) => {
  return <Container style={{ background: "red" }}>Messages</Container>;
};

export default Messages;
