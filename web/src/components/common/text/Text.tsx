import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  className?: string;
  children?: ReactNode;
}

const Text = ({ className, children }: Props) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Title = styled(Text)`
  ${tw`font-semibold`};
  ${tw`text-2xl`};
  ${tw`sm:text-4xl`};
`;

const SubTitle = styled(Text)`
  ${tw`font-semibold`};
  ${tw`text-xl`};
  ${tw`sm:text-2xl`};
`;

Text.Title = Title;
Text.SubTitle = SubTitle;

export default Text;

const Wrapper = styled.p`
  ${tw`leading-5`};
`;
