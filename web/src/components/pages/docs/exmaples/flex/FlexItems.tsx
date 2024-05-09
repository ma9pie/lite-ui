import { Flex } from '@ma9pie/lite-ui';
import React, { ReactNode } from 'react';

const App = () => {
  return (
    <Flex col gap={16}>
      <Container title="start">
        <Flex items="start" gap={8}>
          <div className="w-6 h-6 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-14 h-14 bg-neutral-400"></div>
        </Flex>
      </Container>

      <Container title="center">
        <Flex items="center" gap={8}>
          <div className="w-6 h-6 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-14 h-14 bg-neutral-400"></div>
        </Flex>
      </Container>

      <Container title="end">
        <Flex items="end" gap={8}>
          <div className="w-6 h-6 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-14 h-14 bg-neutral-400"></div>
        </Flex>
      </Container>
    </Flex>
  );
};

export default App;

const Container = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-2 p-4 border border-solid border-neutral-300 rounded">
      <p>{title}</p>
      {children}
    </div>
  );
};

App.code = `import { Flex } from '@ma9pie/lite-ui';
import React, { ReactNode } from 'react';

const App = () => {
  return (
    <Flex col gap={16}>
      <Container title="start">
        <Flex items="start" gap={8}>
          <div className="w-6 h-6 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-14 h-14 bg-neutral-400"></div>
        </Flex>
      </Container>

      <Container title="center">
        <Flex items="center" gap={8}>
          <div className="w-6 h-6 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-14 h-14 bg-neutral-400"></div>
        </Flex>
      </Container>

      <Container title="end">
        <Flex items="end" gap={8}>
          <div className="w-6 h-6 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-14 h-14 bg-neutral-400"></div>
        </Flex>
      </Container>
    </Flex>
  );
};

export default App;

const Container = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-2 p-4 border border-solid border-neutral-300 rounded">
      <p>{title}</p>
      {children}
    </div>
  );
};`;
