import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import Image from 'next/image';
import Link from 'next/link';
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from '@heroicons/react/solid';

type IconType = {
  id: number;
  title: string;
  icon:
    | JSX.Element
    | DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
};

const icons: IconType[] = [
  { id: 1, title: 'Home', icon: <HomeIcon className="h-4" /> },
  { id: 2, title: 'Search', icon: <SearchIcon className="h-4" /> },
  { id: 3, title: 'Watchlist', icon: <PlusIcon className="h-4" /> },
  { id: 4, title: 'Originals', icon: <StarIcon className="h-4" /> },
  {
    id: 5,
    title: 'Movies',
    icon: <img src="/images/movie-icon.svg" alt="" className="h-5" />,
  },
  {
    id: 6,
    title: 'Series',
    icon: <img src="/images/series-icon.svg" alt="" className="h-5" />,
  },
];

export default function Header() {
  const [session] = useSession();

  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 md:px-12 h-[72px]">
      <Link href="/">
        <a>
          <Image
            src="/images/logo.svg"
            alt=""
            width={80}
            height={80}
            className="cursor-pointer"
          />
        </a>
      </Link>
      {session && (
        <div className="hidden ml-10 md:flex items-center space-x-6">
          {icons.map(({ id, icon, title }: IconType) => (
            <Link href="/">
              <a className="header-link group" key={id}>
                {icon}
                <span className="span">{title}</span>
              </a>
            </Link>
          ))}
        </div>
      )}
      {!session ? (
        <button
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
          onClick={() => signIn('google')}
        >
          Login
        </button>
      ) : (
        <img
          src={session?.user?.image || undefined}
          className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer"
          onClick={() => signOut()}
        />
      )}
    </header>
  );
}
