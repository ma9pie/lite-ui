import { Code, Flex, List } from '@ma9pie/lite-ui';
import React from 'react';

import CodeBlock from '@/components/common/CodeBlock';
import { Text } from '@/components/common/text';
import DocsLayout from '@/components/layouts/DocsLayout';
import Head from '@/components/layouts/Head';

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
          <Flex col gap={8}>
            <Text>Requirements:</Text>
            <List>
              <List.Ul>
                <List.Li>React 18 or later</List.Li>
                <List.Li>TailwindCSS 3.4 or later</List.Li>
              </List.Ul>
            </List>
          </Flex>

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
