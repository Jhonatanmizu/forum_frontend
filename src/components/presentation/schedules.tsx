// Images
import BlueRobot from "../../assets/images/blue-robot.png";

const PresentationSchedules = () => {
  return (
    <div className="flex flex-row text-center justify-center items-center text-white mt-5">
      <div className="text-center w-screen h-fit absolute top-36 font-extrabold text-white/5 blur-[10px]">
        <p className="text-[88px] md:text-[290px]">FUTURO</p>
      </div>
      <div className="flex flex-col">
        <p className="text-2xl md:text-[120px]">29</p>
        <p className="text-md md:text-xl">e</p>
        <p className="text-2xl md:text-[120px]">30</p>
        <p className="text-md md:text-xl">agosto</p>
      </div>
      <img src={BlueRobot} className="relative h-[320px] md:h-[778px]" />
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
