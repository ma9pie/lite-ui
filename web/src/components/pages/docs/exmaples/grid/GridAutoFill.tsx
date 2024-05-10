import { Grid } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <Grid repeatCount="auto-fill" tracks="100px" gap={16}>
      <div className="h-10 bg-neutral-400"></div>
      <div className="h-10 bg-neutral-400"></div>
      <div className="h-10 bg-neutral-400"></div>
      <div className="h-10 bg-neutral-400"></div>
      <div className="h-10 bg-neutral-400"></div>
      <div className="h-10 bg-neutral-400"></div>
    </Grid>
  );
};

export default App;

App.code = `import { Grid } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <Grid repeatCount="auto-fill" tracks="100px" gap={16}>
      <div className="h-10 bg-neutral-400"></div>
      <div className="h-10 bg-neutral-400"></div>
      <div className="h-10 bg-neutral-400"></div>
      <div className="h-10 bg-neutral-400"></div>
      <div className="h-10 bg-neutral-400"></div>
      <div className="h-10 bg-neutral-400"></div>
    </Grid>
  );
};

export default App;`;
