//Shadcn UI
import { Button } from "../";
import { cn } from "../../lib/utils";

//Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Header = () => {
  const googleMapsLink = `https://maps.app.goo.gl/GeWLNUp8tQVsGHoUA`;
  const RedirectPage = () => {
    window.open(googleMapsLink, "_blank");
  };

  return (
    <div className="flex flex-row justify-around pt-5">
      <Button
        variant="outline"
        className={cn(
          `border-secondary text-secondary bg-transparent rounded-full font-normal
          w-[146px] h-[30px] text-xs
          md:w-[227px] md:h-[38px] md:text-lg`
        )}
        onClick={() => RedirectPage()}
      >
        <LocationOnIcon /> UNEB - Campus II
      </Button>
      <Button
        variant="outline"
        className={cn(
          `border-white text-white bg-transparent rounded-full font-normal
          w-[146px] h-[30px] text-xs
          md:w-[227px] md:h-[38px] md:text-lg`
        )}
      >
        cronograma do fórum
      </Button>
    </div>
  );
};

export default Header;
