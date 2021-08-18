import { IType } from '../../util/format-data';
import MovieThumbnail from './MovieThumbnail';

type IProps = {
  results: IType[];
  title: string;
};

const Movies = ({ results, title }: IProps) => {
  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold font-title text-4xl">{title}</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
        {results.map((result) => (
          <MovieThumbnail key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
