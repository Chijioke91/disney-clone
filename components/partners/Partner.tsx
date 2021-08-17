import Image from 'next/image';

export type PartnerType = {
  id: number;
  imageSrc: string;
  videoSrc: string;
};

const Partner = () => {
  return (
    <>
      <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
      <video
        autoPlay
        loop
        playsInline
        className="hidden group-hover:inline rounded-lg object-cover"
      >
        <source src="/videos/disney.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default Partner;
