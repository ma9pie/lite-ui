import { Flex } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <Flex gap={32} wrap="wrap">
      <div className="w-10 h-10 bg-neutral-400"></div>
      <div className="w-10 h-10 bg-neutral-400"></div>
      <div className="w-10 h-10 bg-neutral-400"></div>
    </Flex>
  );
};

export default App;

App.code = `import { Flex } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <Flex gap={32} wrap="wrap">
      <div className="w-10 h-10 bg-neutral-400"></div>
      <div className="w-10 h-10 bg-neutral-400"></div>
      <div className="w-10 h-10 bg-neutral-400"></div>
    </Flex>
  );
};

export default App;`;
