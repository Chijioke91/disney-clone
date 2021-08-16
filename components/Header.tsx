import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';

export default function Header() {
  const router = useRouter();
  return (
    <div className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 md:px-12 h-[72px]">
      <Image
        src="/images/logo.svg"
        alt=""
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push('/')}
      />
    </div>
  );
}
