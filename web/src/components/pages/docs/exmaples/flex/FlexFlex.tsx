import { Flex } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <Flex>
      <Flex className="h-10 bg-neutral-300" flex={3}></Flex>
      <Flex className="h-10 bg-neutral-400" flex={4}></Flex>
      <Flex className="h-10 bg-neutral-500" flex={5}></Flex>
    </Flex>
  );
};

export default App;

App.code = `import { Flex } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <Flex>
      <Flex className="h-10 bg-neutral-300" flex={3}></Flex>
      <Flex className="h-10 bg-neutral-400" flex={4}></Flex>
      <Flex className="h-10 bg-neutral-500" flex={5}></Flex>
    </Flex>
  );
};

export default App;`;
