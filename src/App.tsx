//Components
import {
  CountDown,
  Header,
  Presentation,
  SubscribeButton,
  SpeakersCarousel,
  FullMiniCoursesCards,
  CompleteTimeLine,
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
      <CompleteTimeLine />
      <SubscribeButton />
    </main>
  );
};

export default App;
