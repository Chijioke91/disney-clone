import Image from 'next/image';
import { IType } from '../../util/format-data';
import Link from 'next/link';

type IProps = {
  result: IType;
};

function MovieThumbnail({ result }: IProps) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';

  return (
    <Link href={`/movie/${result.id}`}>
      <a className="shows-thumbnail">
        <Image
          src={
            `${BASE_URL}${result?.backdrop_path || result?.poster_path}` ||
            `${BASE_URL}${result?.poster_path}`
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
}

export default MovieThumbnail;
