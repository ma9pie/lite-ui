import { Flex } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <Flex col>
      <Flex className="w-1/3 h-10 bg-neutral-300"></Flex>
      <Flex className="w-1/3 h-10 bg-neutral-400"></Flex>
      <Flex className="w-1/3 h-10 bg-neutral-500"></Flex>
    </Flex>
  );
};

export default App;

App.code = `import { Flex } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <Flex col>
      <Flex className="w-1/3 h-10 bg-neutral-300"></Flex>
      <Flex className="w-1/3 h-10 bg-neutral-400"></Flex>
      <Flex className="w-1/3 h-10 bg-neutral-500"></Flex>
    </Flex>
  );
};

export default App;`;
