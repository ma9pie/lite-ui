import { Chip } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Chip color="#ef4444">Chip</Chip>
      <Chip color="#eab308">Chip</Chip>
      <Chip color="#22c55e">Chip</Chip>
      <Chip color="#3b82f6">Chip</Chip>
      <Chip color="#8b5cf6">Chip</Chip>
    </div>
  );
};

export default App;

App.code = `import { Chip } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Chip color="#ef4444">Chip</Chip>
      <Chip color="#eab308">Chip</Chip>
      <Chip color="#22c55e">Chip</Chip>
      <Chip color="#3b82f6">Chip</Chip>
      <Chip color="#8b5cf6">Chip</Chip>
    </div>
  );
};

export default App;`;
