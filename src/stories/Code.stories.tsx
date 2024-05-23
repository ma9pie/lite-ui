import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';
import React from 'react';

import { Code } from '@/components';
import { CodeProps } from '@/types';

const meta = {
  title: 'Code',
  args: { code: 'npm install @ma9pie/lite-ui' },
  component: Code,
} satisfies Meta;

export default meta;

const CODE = `import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App;`;

const Component = (props: CodeProps) => {
  return (
    <Container>
      <Code
        code={`import { Button, Switch, Modal, Table } from '@ma9pie/lite-ui';`}
      ></Code>
      <Code {...props}></Code>
      <Code code={CODE}></Code>
    </Container>
  );
};

export const Code_ = {
  render: Component,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
