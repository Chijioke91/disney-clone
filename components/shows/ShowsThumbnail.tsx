import { useRouter } from 'next/router';
import Image from 'next/image';
import { IType } from '../../util/format-data';

type IProps = {
  result: IType;
};

const ShowsThumbnail = ({ result }: IProps) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const router = useRouter();

  return (
    <div
      className="shows-thumbnail"
      onClick={() => router.push(`/movie/${result.id}`)}
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
};

export default ShowsThumbnail;
