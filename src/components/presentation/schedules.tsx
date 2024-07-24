// Images
import BlueRobot from "../../assets/images/blue-robot.png";

const PresentationSchedules = () => {
  return (
    <div className="flex flex-row text-center justify-center items-center text-white mt-5">
      <div
        className="absolute z-10 bg-primary/25 w-[425px] h-[425px]
                      md:w-[700px] md:h-[700px]
                      top-20 right-[50%]
                      rounded-full blur-[400px] overflow-hidden"
      />
      <div
        className="absolute z-10 bg-secondary/25
                      w-[425px] h-[425px] md:w-[700px] md:h-[700px]
                      rounded-full blur-[400px] left-[50%] overflow-hidden"
      />

      <div className="text-center w-screen h-fit absolute top-36 font-extrabold text-white/5 blur-[5px]">
        <p className="text-[88px] md:text-[260px]">FUTURO</p>
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
