//Components
import { CompleteTimeLine, Footer } from "@/components";

const Timeline = () => {
  return (
    <main className="flex flex-col bg-background-1 max-w-screen min-h-screen h-fit">
      <CompleteTimeLine />
      <Footer />
    </main>
  );
};

export default Timeline;
