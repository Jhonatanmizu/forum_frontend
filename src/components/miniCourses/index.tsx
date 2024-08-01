//Data
import miniCourses from "./data";
//Components
import MiniCourseCard from "./card";

const FullMiniCoursesCards = () => {
  return (
    <div className="flex flex-col items-center gap-5 w-full h-fit mt-16">
      <p className="text-text text-2lg md:text-xl">Minicurso / Oficina</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        {miniCourses.map((miniCourse, index) => (
          <MiniCourseCard key={index} index={index} miniCourse={miniCourse} />
        ))}
      </div>
    </div>
  );
};

export default FullMiniCoursesCards;
