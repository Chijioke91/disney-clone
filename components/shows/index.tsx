import { IType } from '../../util/format-data';
import ShowsThumbnail from './ShowsThumbnail';

type IProps = {
  results: IType[];
  title: string;
};

const Shows = ({ title, results }: IProps) => {
  return (
    <div className="flex flex-col space-y-2 my-8 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold font-title text-4xl">{title}</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
        {results.map((result) => (
          <ShowsThumbnail key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default Shows;
