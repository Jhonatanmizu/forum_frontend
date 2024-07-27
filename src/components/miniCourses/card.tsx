interface MiniCourse {
  type: string;
  speaker: string;
  title: string;
  photo: string;
}

interface Props {
  miniCourse: MiniCourse;
  index: number;
}

const MiniCourseCard = ({ miniCourse, index }: Props) => {
  const { type, speaker, title, photo } = miniCourse;

  const result = index % 2;

  const flexType = result === 0 && "md:flex-row-reverse";
  const textPosition = result === 0 && "md:text-right";
  const containerStyle = `flex flex-row ${flexType} items-center
                          w-[370px] h-[110px] md:w-[493px] md:h-[134px]
                          gap-5 bg-transparent
                          ${textPosition}`;

  return (
    <div className={containerStyle}>
      <img
        src={photo}
        alt={title}
        className="w-[110px] h-[110px] md:w-[134px] md:h-[134px]
        rounded-lg shadow-[0px_0px_5px_3px_#696B74]"
      />
      <div className="flex flex-col w-[236px] h-[104px] md:w-[335px] md:h-[112px] justify-around">
        <p className="text-secondary text-lg">{type}</p>
        <p className="text-text text-lg">{speaker}</p>
        <p className="text-text text-lg">{title}</p>
      </div>
    </div>
  );
};

export default MiniCourseCard;
