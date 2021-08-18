import Image from 'next/image';
import { PartnerType } from './Partner';

const partners: PartnerType[] = [
  {
    id: 1,
    imageSrc: '/images/disnep.png',
    videoSrc: '/videos/disney.mp4',
  },
  {
    id: 2,
    imageSrc: '/images/pixar.png',
    videoSrc: '/videos/pixar.mp4',
  },
  {
    id: 3,
    imageSrc: '/images/marvel.png',
    videoSrc: '/videos/marvel.mp4',
  },
  {
    id: 4,
    imageSrc: '/images/starwars.png',
    videoSrc: '/videos/star-wars.mp4',
  },
  {
    id: 5,
    imageSrc: '/images/national-geographic.png',
    videoSrc: '/videos/national-geographic.mp4',
  },
];

const Partners = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
      {partners.map((partner: PartnerType) => (
        <div className="partner group" key={partner.id}>
          <Image
            alt="partner"
            src={partner.imageSrc}
            layout="fill"
            objectFit="cover"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src={partner.videoSrc} type="video/mp4" />
          </video>
        </div>
      ))}
    </section>
  );
};

export default Partners;
