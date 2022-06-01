import { Chat, Messages } from "./views";
import { Container } from "./style";
export default function Home() {
  return (
    <Container>
      <Chat className="chat"/>
      <Messages className="messages"/>
    </Container>
  );
}
