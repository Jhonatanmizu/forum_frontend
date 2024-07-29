import { useEffect, useState } from "react";

//Shadcn UI
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

export default function CountDown() {
  const now = new Date().getTime();
  const firstDayStart = new Date("2024-08-29T08:00:00").getTime();
  const firstDayEnd = new Date("2024-08-29T16:00:00").getTime();
  const finalDayStart = new Date("2024-08-30T08:00:00").getTime();
  const finalDayEnd = new Date("2024-08-30T17:00:00").getTime();
  let currentDayEnd: number;

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [happening, setHappening] = useState(false);
  const [ended, setEnded] = useState(false);

  const googleMapsLink = `https://maps.app.goo.gl/GeWLNUp8tQVsGHoUA`;

  const RedirectPage = () => {
    window.open(googleMapsLink, "_blank");
  };

  useEffect(() => {
    if (now < firstDayStart) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      currentDayEnd = firstDayStart;
      setHappening(false);
    } else if (now >= firstDayStart && now < firstDayEnd) {
      currentDayEnd = firstDayEnd;
      setHappening(true);
    } else if (now < finalDayStart) {
      currentDayEnd = finalDayStart;
      setHappening(false);
    } else if (now >= finalDayStart && now < finalDayEnd) {
      currentDayEnd = finalDayEnd;
      setHappening(true);
    } else {
      setEnded(true);
      setHappening(false);
    }

    if (ended) return;

    const timerId = setInterval(() => {
      const now = new Date().getTime();
      const distance = (currentDayEnd - now) / 1000;

      if (distance > 0) {
        const days = Math.floor(distance / 60 / 60 / 24);
        const totalHours = Math.floor(distance / 60 / 60);
        const hours = totalHours % 24;
        const minutes = Math.floor((distance / 60 + 1) % 60);
        const seconds = Math.floor(distance % 60);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        clearInterval(timerId);
        setEnded(true);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [ended, firstDayStart]);

  return (
    <div className="flex flex-row mt-5 justify-center text-center text-text">
      <div
        className="absolute self-center bg-primary/45 w-[425px] h-[425px] md:w-[700px] md:h-[700px]
                   rounded-full blur-[400px] overflow-hidden"
      />
      {ended ? (
        <div
          className="flex w-[210px] h-[70px] md:h-[120px] bg-background-2
                        rounded-lg ring-1 ring-background-3
                        justify-center items-center
                        text-center text-text"
        >
          <p className="text-sm md:text-3lg">O evento acabou</p>
        </div>
      ) : happening ? (
        <Button
          className={cn(`flex flex-col w-[210px] h-[70px] md:h-[120px] bg-secondary
                      rounded-lg ring-1 ring-background-3
                      justify-center items-center
                      text-center text-text text-md`)}
          onClick={() => RedirectPage()}
        >
          <p className="text-sm md:text-3lg">Tá acontecendo!</p>
          <p className="text-sm md:text-3lg">Clica aqui</p>
          <p className="text-sm md:text-3lg">e descubra sua melhor rota</p>
        </Button>
      ) : (
        <div className="flex flex-row max-w-full gap-3 md:gap-5">
          <div
            className="flex flex-col bg-background-2 rounded-2xl ring-1 ring-background-3 justify-center
                       w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
          >
            <div className="text-xl md:text-3xl">{days}</div>
            <p className="text-sm md:text-3lg">dias</p>
          </div>
          <div
            className="flex flex-col bg-background-2 rounded-2xl ring-1 ring-background-3 justify-center
                       w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
          >
            <div className="text-xl md:text-3xl">{hours}</div>
            <p className="text-sm md:text-3lg">horas</p>
          </div>
          <div
            className="flex flex-col bg-background-2 rounded-2xl ring-1 ring-background-3 justify-center
                       w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
          >
            <div className="text-xl md:text-3xl">{minutes}</div>
            <p className="text-sm md:text-3lg">min</p>
          </div>
          <div
            className="flex flex-col bg-background-2 rounded-2xl ring-1 ring-background-3 justify-center
                       w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
          >
            <div className="text-xl md:text-3xl">{seconds}</div>
            <p className="text-sm md:text-3lg">seg</p>
          </div>
        </div>
      )}
    </div>
  );
}
