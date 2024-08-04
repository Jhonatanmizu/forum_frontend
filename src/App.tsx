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
    <main className="flex flex-col relative bg-background-1 max-w-screen min-h-screen h-fit">
      <Header />
      <div
        className="absolute bg-secondary/25
                      w-[50%] h-[425px] md:h-[700px]
                      top-12
                      rounded-full blur-[300px]"
      />
      <div
        className="absolute bg-primary/25
                    w-[50%] h-[425px]
                    top-40 right-0
                    rounded-full blur-[300px]"
      />
      <Presentation />
      <CountDown />
      <div
        className="absolute self-center bg-primary md:bg-primary/45 w-full h-[425px] md:h-[700px]
                   rounded-full blur-[400px]"
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
