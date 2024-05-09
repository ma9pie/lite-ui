import { Code, Flex, List } from '@ma9pie/lite-ui';
import React from 'react';

import CodeBlock from '@/components/common/CodeBlock';
import { Text } from '@/components/common/text';
import DocsLayout from '@/components/layouts/DocsLayout';
import Head from '@/components/layouts/Head';

const REQUIREMENTS = [
  { key: 'react', value: 'React 18 or later' },
  { key: 'tailwindCSS', value: 'TailwindCSS 3.4 or later' },
];

const USAGE_CODE = `import { Button } from '@ma9pie/lite-ui';
import React from 'react';

const Component = () => {
  return (
    <div>
      <Button color="primary">Button</Button>
    </div>
  );
};

export default Component;
`;

const DocsGuidePage = () => {
  return (
    <DocsLayout>
      <Head page="Installation"></Head>

      <Flex col gap={32}>
        <Flex col gap={16}>
          <Text.Title>Installation</Text.Title>
          <Text>
            To use Lite UI, enter the following command in your project
            terminal.
          </Text>
          <div>
            <Text>Requirements:</Text>
            <List list={REQUIREMENTS}></List>
          </div>

          <Code code="npm i @ma9pie/lite-ui"></Code>
        </Flex>

        <Flex col gap={16}>
          <Text.SubTitle>Usage</Text.SubTitle>
          <CodeBlock code={USAGE_CODE}></CodeBlock>
        </Flex>
      </Flex>
    </DocsLayout>
  );
};

export default DocsGuidePage;
