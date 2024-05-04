import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  className?: string;
  children?: ReactNode;
}

const Text = ({ className, children }: Props) => {
  return <p className={className}>{children}</p>;
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
