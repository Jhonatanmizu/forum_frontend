//Components
import {
  CountDown,
  Header,
  Presentation,
  SubscribeButton,
  SpeakersCarousel,
  FullMiniCoursesCards,
} from "./components/";

const App = () => {
  return (
    <main className="flex flex-col bg-background-1 max-w-screen min-h-screen h-fit pb-5">
      <Header />
      <Presentation />
      <CountDown />
      <SubscribeButton />
      <SpeakersCarousel />
      <FullMiniCoursesCards />
    </main>
  );
};

export default App;
