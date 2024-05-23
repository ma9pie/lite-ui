import { Flex } from '@ma9pie/lite-ui';
import React from 'react';
import tw, { styled } from 'twin.macro';

import CodeBlock from '@/components/common/CodeBlock';
import { Text } from '@/components/common/text';
import Head from '@/components/layouts/Head';
import APITable from '@/components/pages/docs/APITable';
import Example from '@/components/pages/docs/Example';
import ImportSource from '@/components/pages/docs/ImportSource';
import { ComponentAPI, ComponentPropsType, ExampleListItem } from '@/types';

interface Props {
  name: string;
  description: string;
  imports: string[];
  src: String;
  examples: ExampleListItem[];
  apis: ComponentAPI[];
  typesData?: ComponentPropsType[];
}

const DocsForm = ({
  name,
  description,
  imports,
  src,
  examples,
  apis,
  typesData,
}: Props) => {
  return (
    <Wrapper>
      <Head page={name}></Head>

      <Section>
        <Text.Title>{name}</Text.Title>
        <Text>{description}</Text>
        <ImportSource imports={imports} src={src}></ImportSource>
      </Section>

      <Section>
        <Text.SubTitle>Examples</Text.SubTitle>
        {examples.map(({ title, component }, idx) => (
          <div key={idx}>
            <Example title={title} component={component}></Example>
          </div>
        ))}
      </Section>

      <Section>
        <Text.SubTitle>API</Text.SubTitle>

        {apis.map(({ componentName, propsData }) => (
          <Flex col gap={16} key={componentName}>
            <Text>{`${componentName} props`}</Text>
            <TableWrapper className="scroll-x">
              <APITable rows={propsData}></APITable>
            </TableWrapper>
          </Flex>
        ))}

        <Flex col gap={16}>
          <Text>Default props</Text>
          <TableWrapper className="scroll-x">
            <APITable
              rows={[
                {
                  property: 'key',
                  type: ['string'],
                  description: 'Unique key that identifies repeated elements.',
                },
                {
                  property: 'className',
                  type: ['string'],
                  description:
                    'Attribute used to add classes to HTML elements.',
                },
                {
                  property: 'style',
                  type: ['CSSProperties'],
                  description:
                    'Attribute used to apply CSS styles directly to HTML elements.',
                },
              ]}
            ></APITable>
          </TableWrapper>
        </Flex>
      </Section>

      {typesData && (
        <Section>
          <Text.SubTitle>Types</Text.SubTitle>

          <Flex col gap={32}>
            {typesData.map(({ type, code }) => (
              <Flex key={type} col gap={16}>
                <Text>{type}</Text>
                <CodeBlock hideCopyIcon code={code}></CodeBlock>
              </Flex>
            ))}
          </Flex>
        </Section>
      )}
    </Wrapper>
  );
};

export default DocsForm;

const Wrapper = styled.div`
  ${tw`flex flex-col gap-8`};
  ${tw`pb-20`};
  ${tw`sm:pb-40`};
`;
const Section = styled.section`
  ${tw`flex flex-col gap-6`};
`;
const TableWrapper = styled.div``;
