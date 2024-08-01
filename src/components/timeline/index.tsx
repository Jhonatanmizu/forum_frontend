//React
import { RefObject } from "react";
//Components
import TimeLineItem from "./timeLine";

//Data
import { thursdayEvents, fridayEvents } from "./data";

//Imagens
import WhiteRobot from "../../assets/images/white-robot.png";

const CompleteTimeLine = ({
  sectionRef,
}: {
  sectionRef: RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="flex flex-col self-center items-center gap-5 w-[95%] md:w-full h-fit mt-16">
      <p className="text-text text-2lg md:text-xl">Cronograma do evento</p>
      <div
        className="flex flex-col md:flex-row rounded-xl md:rounded-none
                      bg-gradient-to-b md:bg-gradient-to-r from-primary/20 to-background-1"
      >
        <div className="ml-5 mt-14 md:mb-16">
          <p className="text-secondary font-semibold text-2lg md:text-xl">
            DIA 29
          </p>
          {thursdayEvents.map((item, index) => (
            <TimeLineItem key={index} {...item} />
          ))}
        </div>
        <div className="ml-5 mt-14 mb-14 md:mb-16">
          <p className="text-secondary font-semibold text-2lg md:text-xl">
            DIA 30
          </p>
          {fridayEvents.map((item, index) => (
            <TimeLineItem key={index} {...item} />
          ))}
          <img
            src={WhiteRobot}
            alt="white robot image"
            className="flex h-[352px] md:hidden mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default CompleteTimeLine;
