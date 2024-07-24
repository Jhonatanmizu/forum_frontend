//Components
import {
  CountDown,
  Header,
  Presentation,
  SubscribeButton,
} from "./components/";

const App = () => {
  return (
    <main className="bg-background-1 w-screen min-h-screen pb-5">
      <Header />
      <Presentation />
      <CountDown />
      <SubscribeButton />
    </main>
  );
};

export default App;
