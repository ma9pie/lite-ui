import { Button, Flex, Spacer } from '@ma9pie/lite-ui';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import tw, { styled } from 'twin.macro';

import { GradientText } from '@/components/common/text';
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
          <Spacer y={32}></Spacer>
          <Link href="/docs/guide/installation">
            <GetStartedButton radius="full" color="primary">
              <Flex justify="center" items="center" gap={8}>
                Get Started<FaArrowRight></FaArrowRight>
              </Flex>
            </GetStartedButton>
          </Link>
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
const GetStartedButton = styled(Button)`
  ${tw`!w-full`};
  ${tw`sm:!w-auto`};
`;
