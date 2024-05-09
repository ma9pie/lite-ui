import React from 'react';

import Head from '@/components/layouts/Head';
import HomeLayout from '@/components/layouts/HomeLayout';
import Main from '@/components/pages/home/Main';

const HomePage = () => {
  return (
    <HomeLayout>
      <Head page="Home"></Head>
      <Main></Main>
    </HomeLayout>
  );
};

export default HomePage;
