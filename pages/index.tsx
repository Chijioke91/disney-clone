import type { GetServerSideProps, NextPage } from 'next';
import { getSession, useSession } from 'next-auth/client';
import Landing from '../components/Landing';
import Layout from '../components/Layout';
import Movies from '../components/movies';
import Partners from '../components/partners';
import Shows from '../components/shows';
import Slider from '../components/Slider';

const Home: NextPage = () => {
  const [session] = useSession();

  return (
    <Layout>
      {!session ? (
        <Landing />
      ) : (
        <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
          <Slider />
          <Partners />
          <Movies />
          <Shows />
        </main>
      )}
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
