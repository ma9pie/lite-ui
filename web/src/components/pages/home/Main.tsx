import { Flex, Spacer } from '@ma9pie/lite-ui';
import React from 'react';
import tw, { styled } from 'twin.macro';

import GradientText from '@/components/common/text/GradientText';
import Description from '@/components/pages/home/Description';
import Headline from '@/components/pages/home/Headline';

const Main = () => {
  return (
    <Wrapepr>
      <Container>
        <Flex col>
          <Headline>
            <GradientText from="#c471ed" to="#f64f59">
              Simple
            </GradientText>
            is best.
          </Headline>
          <Headline>Make websites effortlessly with Lite UI.</Headline>
          <Spacer y={16}></Spacer>
          <Description>Simple, fast and modern React UI library.</Description>
        </Flex>
      </Container>
    </Wrapepr>
  );
};

export default Main;

const Wrapepr = styled.div`
  ${tw`flex min-h-[calc(100vh-64px)]`};
`;
const Container = styled.div`
  ${tw`flex items-center flex-1`};
`;
