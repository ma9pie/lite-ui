import { Code, Flex } from '@ma9pie/lite-ui';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import tw, { styled } from 'twin.macro';

interface Props {
  name: string;
}

const ImportSource = ({ name }: Props) => {
  return (
    <Flex col gap={8}>
      <Flex items="center">
        <FieldText>Import</FieldText>
        <Code
          style={{ padding: '4px 8px' }}
          code={`import { ${name} } from '@ma9pie/lite-ui';`}
        ></Code>
      </Flex>

      <Flex items="center">
        <FieldText>Source</FieldText>
        <LinkText
          href={`https://github.com/ma9pie/lite-ui/blob/main/src/components/${name}.tsx`}
          target="_blank"
        >
          <FaGithub size={20}></FaGithub>
          {`components/${name}.tsx`}
        </LinkText>
      </Flex>
    </Flex>
  );
};

export default ImportSource;

const FieldText = styled.p`
  ${tw`w-16 text-neutral-500`};
`;
const LinkText = styled(Link)`
  ${tw`flex items-center gap-1`};
  ${tw`hover:(underline underline-offset-4)`};
`;
