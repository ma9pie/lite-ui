import React from 'react';
import tw, { styled } from 'twin.macro';

import Head from '@/components/layouts/Head';
import HomeLayout from '@/components/layouts/HomeLayout';

const Custom404 = () => {
  return (
    <HomeLayout>
      <Head page="404"></Head>
      <Container>
        <NumberText>404</NumberText>
        <VerticalLine></VerticalLine>
        <Text>Page not found.</Text>
      </Container>
    </HomeLayout>
  );
};

export default Custom404;

const Container = styled.div`
  ${tw`flex-1 flex justify-center items-center gap-4`};
`;
const NumberText = styled.p`
  ${tw`text-3xl text-neutral-700 font-semibold`};
`;
const Text = styled.p`
  ${tw`text-neutral-500 font-medium`};
`;
const VerticalLine = styled.div`
  ${tw`w-px h-10 bg-neutral-500`};
`;
