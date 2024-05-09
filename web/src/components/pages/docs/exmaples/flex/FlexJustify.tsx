import { Flex } from '@ma9pie/lite-ui';
import React, { ReactNode } from 'react';

const App = () => {
  return (
    <Flex col gap={16}>
      <Container title="start">
        <Flex justify="start" gap={8}>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
        </Flex>
      </Container>

      <Container title="end">
        <Flex justify="end" gap={8}>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
        </Flex>
      </Container>

      <Container title="center">
        <Flex justify="center" gap={8}>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
        </Flex>
      </Container>

      <Container title="between">
        <Flex justify="between" gap={8}>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
        </Flex>
      </Container>

      <Container title="evenly">
        <Flex justify="evenly" gap={8}>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
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
        <Flex justify="start" gap={8}>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
        </Flex>
      </Container>

      <Container title="end">
        <Flex justify="end" gap={8}>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
        </Flex>
      </Container>

      <Container title="center">
        <Flex justify="center" gap={8}>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
        </Flex>
      </Container>

      <Container title="between">
        <Flex justify="between" gap={8}>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
        </Flex>
      </Container>

      <Container title="evenly">
        <Flex justify="evenly" gap={8}>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
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
