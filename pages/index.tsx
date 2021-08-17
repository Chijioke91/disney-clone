import type { GetServerSideProps, NextPage } from 'next';
import { Session } from 'next-auth';
import { getSession, useSession } from 'next-auth/client';
import Landing from '../components/Landing';
import Layout from '../components/Layout';

type IProps = {
  session: Session;
};

const Home: NextPage = () => {
  const [session] = useSession();

  return <Layout>{session ? <h1>Welcome to the App</h1> : <Landing />}</Layout>;
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
