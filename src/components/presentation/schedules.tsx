// Images
import BlueRobot from "../../assets/images/blue-robot.png";

const PresentationSchedules = () => {
  return (
    <div className="flex flex-row max-w-full text-center relative justify-center items-center text-white mt-5 overflow-hidden">
      <div className="text-center h-fit absolute md:-top-28 -top-10  font-extrabold text-white/5 blur-[5px] overflow-hidden">
        <p className="text-[88px] md:text-[280px]">FUTURO</p>
      </div>

      <div className="flex flex-col">
        <p className="text-2xl md:text-[120px]">29</p>
        <p className="text-md md:text-xl">e</p>
        <p className="text-2xl md:text-[120px]">30</p>
        <p className="text-md md:text-xl">agosto</p>
      </div>
      <img src={BlueRobot} className="relative h-[300px] md:h-[778px]" />
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
