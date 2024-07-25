//Components
import {
  CountDown,
  Header,
  Presentation,
  SubscribeButton,
} from "./components/";

const App = () => {
  return (
    <main className="bg-background-1 max-w-screen min-h-screen h-fit pb-5">
      <Header />
      <Presentation />
      <CountDown />
      <SubscribeButton />
      <div className="max-w-full h-44" />
    </main>
  );
};

export default App;
