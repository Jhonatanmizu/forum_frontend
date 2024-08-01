//Imagens
import UnebImage from "../../assets/images/uneb.png";

//Shadcn UI
import { Button } from "../";
import { cn } from "../../lib/utils";

//Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";

const About = () => {
  const AboutUneb = `O campus II da UNEB em Alagoinhas é um importante centro educacional, oferecendo cursos variados e contribuindo para o desenvolvimento regional.
    O curso de Sistemas de Informação destaca-se por sua formação abrangente em tecnologia da informação. Nos dias 29 e 30 de agosto de 2024, o campus sediará o
    "IX Fórum de Tecnologia: O Futuro é Agora", focado em inteligência artificial, com palestras, minicurso e oficina de pesquisadores, visando disseminar conhecimento e
    envolver a comunidade local.`;

  const unebLink = `https://www.dcet2.uneb.br/`;
  const googleMapsLink = `https://maps.app.goo.gl/GeWLNUp8tQVsGHoUA`;

  const RedirectPage = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="flex flex-col items-center mt-16 md:max-w-[1400px] max-w-full self-center">
      <p className="flex text-text text-2lg md:text-xl mb-6 text-center md:w-[95%] md:text-start">
        Nossa universidade
      </p>
      <div className="flex flex-col md:flex-row w-[95%]">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-text text-md md:text-2lg mb-8">{AboutUneb}</p>
          <img
            src={UnebImage}
            alt="ilustração sobra a uneb"
            className="h-[245px] md:h-[392px] md:ml-32 mb-8 flex md:hidden"
          />
          <Button
            variant="outline"
            className={cn(
              `border-secondary text-secondary bg-transparent rounded-full font-normal
                w-[350px] h-[50px] text-md
                md:w-[432px] md:h-[50px] md:text-lg mb-8 gap-2`
            )}
            onClick={() => RedirectPage(googleMapsLink)}
          >
            <LocationOnIcon /> Rodovia BR-110, KM 03, Alagoinhas - BA
          </Button>
          <Button
            variant="outline"
            className={cn(
              `border-stroke text-text bg-transparent rounded-full font-normal
                w-[146px] h-[30px] text-md
                md:w-[227px] md:h-[38px] md:text-lg
                shadow-[0px_0px_5px_3px_#696B74] mb-8`
            )}
            onClick={() => RedirectPage(unebLink)}
          >
            Saiba mais
          </Button>
        </div>
        <img
          src={UnebImage}
          alt="ilustração sobra a uneb"
          className="h-[245px] md:h-[392px] md:ml-32 mb-8 hidden md:block"
        />
      </div>
    </div>
  );
};

export default About;
