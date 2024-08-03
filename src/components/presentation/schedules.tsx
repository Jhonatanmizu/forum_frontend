// Images
import BlueRobot from "../../assets/images/blue-robot.png";

const PresentationSchedules = () => {
  return (
    <div className="flex flex-row max-w-full text-center relative justify-center items-center text-white mt-5">
      <div className="text-center h-fit absolute md:-top-32 -top-10 font-extrabold text-white/5 blur-[5px] overflow-hidden">
        <p className="text-[84px] md:text-[280px]">FUTURO</p>
      </div>

      <div className="flex flex-col">
        <p className="text-2xl md:text-[120px]">29</p>
        <p className="text-md md:text-xl">e</p>
        <p className="text-2xl md:text-[120px]">30</p>
        <p className="text-md md:text-xl">agosto</p>
      </div>
      <div className="relative h-[320px] md:h-[778px]">
        <div className="absolute bottom-0 left-0 w-[100%] h-[10%] bg-gradient-to-t from-black/25 to-transparent rounded-xl" />
        <img src={BlueRobot} className="h-full w-auto" alt="Blue Robot" />
      </div>
      <div className="flex flex-col">
        <p className="text-2xl md:text-[120px]">08</p>
        <p className="text-md md:text-xl"> _ _ </p>
        <p className="text-2xl md:text-[120px]">00</p>
        <p className="text-md md:text-xl">horas</p>
      </div>
    </div>
  );
};

export default PresentationSchedules;
