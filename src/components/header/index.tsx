//Shadcn UI
import { Button } from "../";
import { cn } from "../../lib/utils";

//Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header = ({ scrollToSection }: { scrollToSection: () => void }) => {
  const googleMapsLink = `https://maps.app.goo.gl/GeWLNUp8tQVsGHoUA`;
  const instagramLink = `https://www.instagram.com/forumdetecnologia/`;

  const RedirectPage = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="flex flex-row max-w-full justify-around pt-5">
      <Button
        variant="outline"
        className={cn(
          `border-secondary text-secondary bg-transparent rounded-full font-normal gap-2
          w-[146px] h-[30px] text-xs
          md:w-[227px] md:h-[38px] md:text-lg`
        )}
        onClick={() => RedirectPage(googleMapsLink)}
      >
        <LocationOnIcon /> UNEB - Campus II
      </Button>
      <Button
        variant="outline"
        className={cn(
          `border-white text-white bg-transparent rounded-full font-normal gap-2
          w-[146px] h-[30px] text-xs
          md:w-[227px] md:h-[38px] md:text-lg`
        )}
        onClick={() => RedirectPage(instagramLink)}
      >
        <InstagramIcon /> Instagram
      </Button>
    </div>
  );
};

export default Header;
