import React from 'react';
import tw, { styled } from 'twin.macro';

import CodeBlock from '@/components/common/CodeBlock';
import { ExampleComponent } from '@/types';

interface Props {
  title: string;
  component: ExampleComponent;
}

const Example = ({ title, component }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Container>{component()}</Container>
      <CodeBlock theme="light" code={component.code}></CodeBlock>
    </Wrapper>
  );
};

export default Example;

const Wrapper = styled.div`
  ${tw`flex flex-col gap-2`};
`;
const Title = styled.p`
  ${tw`text-base`};
  ${tw`sm:text-lg`};
`;
const Container = styled.div`
  ${tw`p-4 border border-solid border-neutral-200 rounded-xl`};
`;
