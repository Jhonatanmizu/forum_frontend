//Components
import {
  CountDown,
  Header,
  Presentation,
  SubscribeButton,
  SpeakersCarousel,
  FullMiniCoursesCards,
  CompleteTimeLine,
  About,
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
      <About />
    </main>
  );
};

export default App;
