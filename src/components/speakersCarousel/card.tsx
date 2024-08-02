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
            w-[100%] h-[180px] md:w-[250px] md:h-[387px]
            ring-1 ring-stroke
            rounded-2xl shadow-lg"
    >
      <div
        className="rounded-xl bg-transparent
                    w-[100px] h-[120px] md:w-[190px] md:h-[173px] flex justify-center mt-5 mb-5"
      >
        {photo && (
          <img
            src={photo}
            alt={speaker}
            className="w-full h-full rounded-xl object-cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-2 w-[65%] h-[90%] md:w-[90%] md:h-[50%] text-left">
        <p className="text-text font-extrabold text-lg">{speaker}</p>
        <p className="text-text/75 text-md">{office}</p>
        <p className="text-text font-extrabold text-lg">
          TEMA DA PALESTRA {counter}
        </p>
        <p className="text-text/75 text-md">{title}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
