//Components
import SponsorshipsCard from "./sponsorshipsCard";

//Data
import sponsorships from "./data";

const Footer = () => {
  return (
    <div className="flex flex-col w-full min-h-[146px] pt-5 pb-5 bg-tertiary text-text text-center items-center">
      <div>UMA REALIZAÇÃO</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-[95%] justify-center items-center">
        {sponsorships.map((sponsorship, index) => (
          <SponsorshipsCard key={index} {...sponsorship} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
