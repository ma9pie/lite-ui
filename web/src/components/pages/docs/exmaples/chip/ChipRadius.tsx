import { Chip } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Chip radius={0}>Chip</Chip>
      <Chip radius={8}>Chip</Chip>
      <Chip radius={12}>Chip</Chip>
      <Chip>Chip</Chip>
    </div>
  );
};

export default App;

App.code = `import { Chip } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Chip radius={0}>Chip</Chip>
      <Chip radius={8}>Chip</Chip>
      <Chip radius={12}>Chip</Chip>
      <Chip>Chip</Chip>
    </div>
  );
};

export default App;`;
