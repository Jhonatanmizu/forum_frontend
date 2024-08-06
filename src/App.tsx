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
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <main className="flex flex-col relative bg-background-1 max-w-screen min-h-screen h-fit">
      <Toaster />
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
