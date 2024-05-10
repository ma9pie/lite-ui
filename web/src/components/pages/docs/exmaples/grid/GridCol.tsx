import { Grid } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <Grid className="w-fit" col={3} gap={8}>
      <div className="w-10 h-10 bg-neutral-400"></div>
      <div className="w-10 h-10 bg-neutral-400"></div>
      <div className="w-10 h-10 bg-neutral-400"></div>
      <div className="w-10 h-10 bg-neutral-400"></div>
      <div className="w-10 h-10 bg-neutral-400"></div>
    </Grid>
  );
};

export default App;

App.code = `import { Grid } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <Grid className="w-fit" col={3} gap={8}>
      <div className="w-10 h-10 bg-neutral-400"></div>
      <div className="w-10 h-10 bg-neutral-400"></div>
      <div className="w-10 h-10 bg-neutral-400"></div>
      <div className="w-10 h-10 bg-neutral-400"></div>
      <div className="w-10 h-10 bg-neutral-400"></div>
    </Grid>
  );
};

export default App;`;
