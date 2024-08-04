//Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SpeakerCard from "./card";
//Plugins
import Autoplay from "embla-carousel-autoplay";
//Data
import lectures from "./data";

const SpeakersCarousel = () => {
  return (
    <div className="flex flex-col text-center pt-20">
      <p className="text-text text-2lg md:text-xl">Palestrantes</p>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="flex w-[100%] md:max-w-[1100px] self-center pt-5 overflow-visible space-x-1"
      >
        <CarouselContent className="overflow-visible">
          {lectures.map((item, index) => {
            return (
              <CarouselItem key={index} className="basis-5/6 md:basis-1/4">
                <div className="flex justify-around pt-1 pb-1">
                  <SpeakerCard counter={index + 1} lecture={item} />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default SpeakersCarousel;
