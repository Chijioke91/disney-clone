import type { GetServerSideProps, NextPage } from 'next';
import { getSession, useSession } from 'next-auth/client';
import Landing from '../components/Landing';
import Layout from '../components/Layout';
import Movies from '../components/movies';
import Partners from '../components/partners';
import Shows from '../components/shows';
import Slider from '../components/Slider';
import { IType, formatResults } from '../util/format-data';

type PageProps = {
  popularMovies: IType[];
  popularShows: IType[];
  topRatedMovies: IType[];
  topRatedShows: IType[];
};

const Home: NextPage<PageProps> = ({
  popularMovies,
  popularShows,
  topRatedMovies,
  topRatedShows,
}) => {
  const [session] = useSession();

  return (
    <Layout>
      {!session ? (
        <Landing />
      ) : (
        <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
          <Slider />
          <Partners />
          <Movies results={popularMovies} title="Popular Movies" />
          <Shows results={popularShows} title="PopularShows" />
          <Movies results={topRatedMovies} title="Top Rated Movies" />
          <Shows results={topRatedShows} title="Top Rated Shows" />
        </main>
      )}
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  const [
    popularMoviesRes,
    popularShowsRes,
    topRatedMoviesRes,
    topRatedShowsRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US&page=1`
    ),
  ]);

  const [popularMovies, popularShows, topRatedMovies, topRatedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowsRes.json(),
      topRatedMoviesRes.json(),
      topRatedShowsRes.json(),
    ]);

  return {
    props: {
      session,
      popularMovies: formatResults(popularMovies.results),
      popularShows: formatResults(popularShows.results),
      topRatedMovies: formatResults(topRatedMovies.results),
      topRatedShows: formatResults(topRatedShows.results),
    },
  };
};
