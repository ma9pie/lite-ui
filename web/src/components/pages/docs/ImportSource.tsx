import { Code } from '@ma9pie/lite-ui';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import tw, { styled } from 'twin.macro';

interface Props {
  imports: string[];
  src: String;
}

const ImportSource = ({ imports, src }: Props) => {
  return (
    <Wrapper>
      <Container>
        <FieldText>Import</FieldText>
        <ImportCode
          code={`import { ${imports.join(', ')} } from '@ma9pie/lite-ui';`}
        ></ImportCode>
      </Container>

      <Container>
        <FieldText>Source</FieldText>
        <LinkText
          href={`https://github.com/ma9pie/lite-ui/blob/main/src/components/${src}`}
          target="_blank"
        >
          <FaGithub size={20}></FaGithub>
          {`components/${src}`}
        </LinkText>
      </Container>
    </Wrapper>
  );
};

export default ImportSource;

const Wrapper = styled.div`
  ${tw`flex flex-col`};
  ${tw`gap-4`};
  ${tw`sm:gap-0`};
`;
const Container = styled.div`
  ${tw`flex`};
  ${tw`flex-col gap-2`};
  ${tw`sm:(min-h-10 flex-row items-center)`};
`;
const ImportCode = styled(Code)`
  ${tw`w-full px-4 py-2`};
  ${tw`sm:(w-auto px-2 py-1)`};
`;
const FieldText = styled.p`
  ${tw`w-16 text-neutral-500`};
`;
const LinkText = styled(Link)`
  ${tw`flex items-center gap-1`};
  ${tw`hover:(underline underline-offset-4)`};
`;
