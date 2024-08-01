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
      {/* TODO CREATE A BLUR COMPONENT HERE */}
      {/* We should create a section or div to blur parts, and this section should use position relative,
      and you should control de position of the blur using absolute position */}
      <div
        className="absolute z-10 bg-primary/25
                      w-full h-[425px]
                       md:h-[700px]
                      top-20 right-1/2 transform -translate-x-1/2
                      rounded-full blur-[400px]"
      />
      <div
        className="absolute z-10 bg-secondary/25
                    w-full h-[425px]
                  md:h-[700px]
                      rounded-full blur-[400px]
                      right-1 transform -translate-x-1/4"
      />

      <Presentation />
      <CountDown />
      <div
        className="absolute self-center bg-primary/45 w-full h-[425px] md:h-[700px]
                   rounded-full blur-[400px] overflow-hidden"
      />
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
