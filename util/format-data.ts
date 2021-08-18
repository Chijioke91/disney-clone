export type DataType = {
  id: number;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  belongs_to_collection?: {
    id?: number;
    name?: string;
    poster_path?: string;
    backdrop_path?: string;
  };
  budgets?: number;
  genres?: { id: number; name: string }[];
  homepage?: string | null;
  imdb_id?: string | null;
  production_companies?: {
    name: string;
    id: string;
    logo_path: string | null;
    origin_country: string;
  }[];
  production_countries?: { iso_3166_1?: string; name?: string }[];
  runtime?: number;
  spoken_languages?: { iso_639_1?: string; name?: string }[];
  status?: string;
  tagline?: string | null;
  videos: {
    results: {
      iso_639_1?: string;
      iso_3166_1?: string;
      name?: string;
      key?: string;
      site?: string;
      size?: number;
      type?: string;
      official?: boolean;
      published_at?: string;
      id?: string;
    }[];
  };
};

export type IType = {
  id: number;
  backdrop_path: string | undefined;
  poster_path: string | undefined;
};

export type SingleType = {
  id: number;
  backdrop_path: string | undefined;
  poster_path: string | undefined;
  release_date?: string | undefined;
  overview?: string;
  videos: {
    results: {
      iso_639_1?: string;
      iso_3166_1?: string;
      name?: string;
      key?: string;
      site?: string;
      size?: number;
      type?: string;
      official?: boolean;
      published_at?: string;
      id?: string;
    }[];
  };
  title?: string;
  original_name?: string;
  genres?: { id: number; name: string }[];
  runtime?: number;
};

export const formatResults = (data: DataType[]): IType[] =>
  data.map((res: DataType) => ({
    id: res.id,
    backdrop_path: res.backdrop_path,
    poster_path: res.poster_path,
  }));

// Object.entries(data).map((res: DataType) => ({
// id: res.id,
// backdrop_path: res.backdrop_path,
// poster_path: res.poster_path,
// videos: res.videos,
// title: res.title,
// original_name: res.original_title,
// genres: res.genres,
// first_air_date: res.first_air_date,
// runtime: res.runtime,
// }));

export const formatSingleResult = (data: DataType): SingleType => {
  return {
    id: data['id'],
    backdrop_path: data['backdrop_path'],
    poster_path: data['poster_path'],
    videos: data['videos'],
    title: data['title'],
    original_name: data['original_title'],
    genres: data['genres'],
    runtime: data['runtime'],
    release_date: data['release_date'],
    overview: data['overview'],
  };
};
