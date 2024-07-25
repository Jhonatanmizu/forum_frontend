import PresentationTitle from "./title";
import PresentationSchedules from "./schedules";
import PresentationSubtitle from "./subtitle";

const Presentation = () => {
  return (
    <div className="flex flex-col max-w-full">
      <PresentationTitle />
      <PresentationSchedules />
      <PresentationSubtitle />
    </div>
  );
};

export default Presentation;
