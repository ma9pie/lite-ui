import { Chip } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Chip variant="filled">Filled</Chip>
      <Chip variant="outlined">Outlined</Chip>
    </div>
  );
};

export default App;

App.code = `import { Chip } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Chip variant="filled">Filled</Chip>
      <Chip variant="outlined">Outlined</Chip>
    </div>
  );
};

export default App;`;
