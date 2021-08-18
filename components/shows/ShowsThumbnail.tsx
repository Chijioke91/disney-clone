import Image from 'next/image';
import Link from 'next/link';
import { IType } from '../../util/format-data';

type IProps = {
  result: IType;
};

const ShowsThumbnail = ({ result }: IProps) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';

  return (
    <Link href={`/shows/${result.id}`}>
      <a className="shows-thumbnail">
        <Image
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
          alt="thumbnail"
          width={330}
          height={210}
          objectFit="cover"
          className="rounded-lg"
        />
      </a>
    </Link>
  );
};

export default ShowsThumbnail;
