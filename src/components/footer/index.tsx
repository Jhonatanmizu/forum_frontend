//Components
import SponsorshipsCard from "./sponsorshipsCard";

//Data
import { realization, supports } from "./data";

const Footer = () => {
  return (
    <div className="flex flex-col w-full min-h-[146px] pt-5 pb-5 bg-tertiary text-text text-center items-center mt-20">
      <div className="mt-5">UMA REALIZAÇÃO</div>
      <div className="flex flex-row-reverse flex-wrap w-[95%] items-center justify-around">
        {realization.map((item, index) => (
          <SponsorshipsCard key={index} {...item} />
        ))}
      </div>
      <div className="mt-5">APOIO</div>
      <div className="flex flex-row flex-wrap w-[95%] items-center justify-around">
        {supports.map((item, index) => (
          <SponsorshipsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
