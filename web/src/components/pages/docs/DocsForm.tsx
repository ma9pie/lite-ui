import { Flex } from '@ma9pie/lite-ui';
import React from 'react';
import tw, { styled } from 'twin.macro';

import { Text } from '@/components/common/text';
import Head from '@/components/layouts/Head';
import APITable from '@/components/pages/docs/APITable';
import Example from '@/components/pages/docs/Example';
import ImportSource from '@/components/pages/docs/ImportSource';
import { APITableRowItem, ExampleListItem } from '@/types';

interface Props {
  name: string;
  description: string;
  examples: ExampleListItem[];
  apiData: APITableRowItem[];
}

const DocsForm = ({ name, description, examples, apiData }: Props) => {
  return (
    <Wrapper>
      <Head page={name}></Head>

      <Section>
        <Text.Title>{name}</Text.Title>
        <Text>{description}</Text>
        <ImportSource name={name}></ImportSource>
      </Section>

      <Section>
        <Text.SubTitle>Examples</Text.SubTitle>
        {examples.map(({ title, component }) => (
          <div key={title}>
            <Example title={title} component={component}></Example>
          </div>
        ))}
      </Section>

      <Section>
        <Text.SubTitle>API</Text.SubTitle>

        <Flex col gap={16}>
          <Text>{`${name} props`}</Text>
          <TableWrapper className="scroll-x">
            <APITable rows={apiData}></APITable>
          </TableWrapper>
        </Flex>

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
