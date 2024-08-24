import Da from "../../assets/images/sponsorships/DA.png";
import Dcet from "../../assets/images/sponsorships/DCET.png";
import TecnoSystem from "../../assets/images/sponsorships/tecnoSystem.png";
import Uneb from "../../assets/images/sponsorships/uneb.png";
import ArenaGames from "../../assets/images/sponsorships/arenaGames.png";
import Prefeitura from "../../assets/images/sponsorships/prefeitura.png";

interface Sponsorship {
  title?: string;
  subtitle?: string;
  photo?: string;
  alt?: string;
}

const realization: Sponsorship[] = [
  {
    title: "",
    subtitle: "",
    photo: Uneb,
    alt: "logo da universidade do estado da Bahia",
  },
  {
    title: "",
    subtitle: "",
    photo: Dcet,
    alt: "logo do departamento de ciências exatas e da terra",
  },
  {
    title: "TecnoSystem",
    subtitle: "Empresa Junior",
    photo: TecnoSystem,
    alt: "logo da empresa júnior TecnoSystem",
  },
  {
    title: "",
    subtitle: "",
    photo: Da,
    alt: "logo do departamento acadêmico",
  },
];

const supports: Sponsorship[] = [
  {
    title: "",
    subtitle: "",
    photo: ArenaGames,
    alt: "logo da arena games Bahia",
  },
  {
    title: "",
    subtitle: "",
    photo: Prefeitura,
    alt: "logo da prefeitura de Alagoinhas",
  },
];

export { realization, supports };
