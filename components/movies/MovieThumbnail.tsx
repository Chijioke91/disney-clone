import Image from 'next/image';
import { useRouter } from 'next/router';
import { IType } from '../../util/format-data';

type IProps = {
  result: IType;
};

function MovieThumbnail({ result }: IProps) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/movie/${result.id}`)}
      className="shows-thumbnail"
    >
      <Image
        src={
          `${BASE_URL}${result?.backdrop_path || result?.poster_path}` ||
          `${BASE_URL}${result?.poster_path}`
        }
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
}

export default MovieThumbnail;
