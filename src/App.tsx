import { useRef } from "react";

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
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex flex-col bg-background-1 max-w-screen min-h-screen h-fit">
      <Header scrollToSection={scrollToSection} />
      <Presentation />
      <CountDown />
      <SubscribeButton />
      <SpeakersCarousel />
      <FullMiniCoursesCards />
      <CompleteTimeLine sectionRef={sectionRef} />
      <SubscribeButton />
      <About />
      <Footer />
    </main>
  );
};

export default App;
