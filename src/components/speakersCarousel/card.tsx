interface Lecture {
  time: string;
  title: string;
  speaker: string;
  note?: string;
  photo: string;
  office?: string;
  link?: string;
}

interface Props {
  counter: number;
  lecture: Lecture;
}

const SpeakerCard = ({ counter, lecture }: Props) => {
  const { title, speaker, photo, office } = lecture;

  return (
    <div
      className="flex flex-row md:flex-col
          bg-card/5 justify-around md:justify-evenly items-center
            w-[100%] h-[160px] md:w-[260px] md:h-[387px]
            ring-1 ring-stroke
            rounded-2xl shadow-lg"
    >
      <div
        className="rounded-xl bg-transparent
                    w-[125px] h-[125px] md:w-[190px] md:h-[173px] flex justify-center mt-4 mb-4"
      >
        {photo && (
          <img
            src={photo}
            alt={speaker}
            className="w-[90%] md:w-[100%] h-full rounded-xl object-cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-1 w-[60%] h-fit md:w-[95%] md:h-[45%] text-left">
        <p className="text-text font-extrabold text-lg">{speaker}</p>
        <p className="text-text/75 text-sm md:text-md">{office}</p>
        <p className="text-text font-extrabold text-md md:text-lg">
          TEMA DA PALESTRA {counter}
        </p>
        <p className="text-text/75 text-sm md:text-md">{title}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
