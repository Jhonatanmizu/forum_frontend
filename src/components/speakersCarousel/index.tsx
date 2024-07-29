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
    <div className="flex flex-col max-w-full text-center pt-20">
      <p className="text-text text-2lg md:text-xl">nossos palestrantes</p>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="flex max-w-[90%] md:max-w-[1100px] self-center pt-5"
      >
        <CarouselContent>
          {lectures.map((item, index) => {
            return (
              <CarouselItem key={index} className="md:basis-1/4">
                <div className="pt-1 pb-1">
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
