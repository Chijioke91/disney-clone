export type MovieDataType = {
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

export type ShowDataType = {
  backdrop_path?: string | null | undefined;
  created_by?: {
    id: number;
    credit_id: string;
    name?: string;
    gender?: number;
  }[];
  episode_run_time?: number[];
  first_air_date?: string;
  genres?: { id: number; name: string }[];
  homepage?: string | null;
  id: number;
  in_production?: boolean;
  languages?: string[];
  last_air_date?: string;
  last_episode_to_air?: {
    air_date?: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: string | null;
    vote_average: number;
    vote_count: number;
  };

  name?: string;
  next_episode_to_air?: {
    air_date?: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: string | null;
    vote_average: number;
    vote_count: number;
  } | null;
  networks: [
    {
      name: string;
      id: number;
      logo_path: string;
      origin_country: string;
    }
  ];
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: {
    name: string;
    id: string;
    logo_path: string | null;
    origin_country: string;
  }[];
  production_countries?: { iso_3166_1?: string; name?: string }[];
  seasons: {
    air_date?: string | undefined | null;
    episode_count?: number;
    id?: number;
    name?: string;
    overview?: string;
    poster_path?: string | undefined | null;
    season_number?: number | undefined | null;
  }[];
  spoken_languages?: { iso_639_1?: string; name?: string }[];

  status?: string;
  tagline?: string | null;
  type?: string;
  vote_average?: number;
  vote_count?: number;
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
  // adult?: boolean;
  // genre_ids?: number[];
  // original_title?: string;
  // release_date?: string;
  // title?: string | null | undefined;
  // video?: boolean;
  // belongs_to_collection?: {
  //   id?: number;
  //   name?: string;
  //   poster_path?: string;
  //   backdrop_path?: string;
  // };
  // budgets?: number;
  // imdb_id?: string | null;
  // runtime?: number;
};

export type SingleMovieType = {
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

export type SingleShowType = {
  original_name: string | null | undefined;
  backdrop_path: string | null | undefined;
  overview: string | null | undefined;
  poster_path: string | undefined;
  first_air_date: string | undefined;
  number_of_seasons?: number;
  genres?: { id: number; name: string }[];
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

export const formatResults = (data: MovieDataType[]): IType[] =>
  data.map((res: MovieDataType) => ({
    id: res.id,
    backdrop_path: res.backdrop_path,
    poster_path: res.poster_path,
  }));

export const formatSingleMovie = (data: MovieDataType): SingleMovieType => {
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

export const formatSingleShow = (data: ShowDataType): SingleShowType => {
  return {
    videos: data['videos'],
    original_name: data['original_name'],
    backdrop_path: data['backdrop_path'],
    poster_path: data['poster_path'],
    first_air_date: data['first_air_date'],
    genres: data['genres'],
    overview: data['overview'],
    number_of_seasons: data['number_of_seasons'],
  };
};
