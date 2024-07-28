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
  Footer,
} from "./components/";

const App = () => {
  return (
    <main className="flex flex-col bg-background-1 max-w-screen min-h-screen h-fit">
      <Header />
      <Presentation />
      <CountDown />
      <SubscribeButton />
      <SpeakersCarousel />
      <FullMiniCoursesCards />
      <CompleteTimeLine />
      <SubscribeButton />
      <About />
      <Footer />
    </main>
  );
};

export default App;
