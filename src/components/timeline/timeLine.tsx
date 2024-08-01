interface Event {
  startAt: string;
  endAt: string;
  title: string;
  speaker: string;
  type: string;
}

const TimeLineItem = (event: Event) => {
  const { startAt, title } = event;
  return (
    <div className="flex flex-row gap-5">
      <div className="flex flex-row gap-5 items-center">
        <div className="w-[8px] h-[8px] bg-secondary rounded-full" />
        <p className="text-text text-2lg w-[61px] md:w-[71px]">{startAt}</p>
      </div>
      <p className="text-text/70 text-2lg md:text-3lg">{title}</p>
    </div>
  );
};

export default TimeLineItem;
