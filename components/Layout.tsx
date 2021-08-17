import { FC } from 'react';
import Head from 'next/head';
import Header from './Header';

type IProps = {
  title?: string;
  description?: string;
  keywords?: string;
};

const Layout: FC<IProps> = ({ title, description, keywords, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;

Layout.defaultProps = {
  title: '+Disney',
  description: 'This is a disney clone',
  keywords: 'Disney Clone, Disney, Cartoon, Movies, ',
};
