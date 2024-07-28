interface Sponsorship {
  title?: string;
  subtitle?: string;
  photo?: string;
  alt: string;
}

const SponsorshipsCard = (sponsorship: Sponsorship) => {
  const { title, subtitle, photo, alt } = sponsorship;

  return (
    <div className="flex flex-row items-center justify-center text-ellipsis overflow-hidden gap-5 p-5">
      {photo && <img src={photo} alt={alt} className="h-[40px] md:h-[80px]" />}
      {title && (
        <div>
          <p className="text-lg">{title}</p>
          <p className="text-lg">{subtitle}</p>
        </div>
      )}
    </div>
  );
};

export default SponsorshipsCard;
