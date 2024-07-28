import Da from "../../assets/images/sponsorships/DA.png";
import Dcet from "../../assets/images/sponsorships/DCET.png";
import Event from "../../assets/images/sponsorships/event.svg";
import TecnoSystem from "../../assets/images/sponsorships/tecnoSystem.png";
import Uneb from "../../assets/images/sponsorships/uneb.png";

interface Sponsorship {
  title?: string;
  subtitle?: string;
  photo?: string;
  alt: string;
}

const sponsorships: Sponsorship[] = [
  {
    title: "",
    subtitle: "",
    photo: Da,
    alt: "logo do departamento acadêmico",
  },
  {
    title: "",
    subtitle: "",
    photo: Dcet,
    alt: "logo do departamento de ciências exatas e da terra",
  },
  {
    title: "",
    subtitle: "",
    photo: Event,
    alt: "logo do evento o futuro é agora",
  },
  {
    title: "TecnoSystem",
    subtitle: "Empresa Junior",
    photo: TecnoSystem,
    alt: "logo da empresa júnior tecnosystem",
  },
  {
    title: "",
    subtitle: "",
    photo: Uneb,
    alt: "logo da universidade do estado da bahia",
  },
];

export default sponsorships;