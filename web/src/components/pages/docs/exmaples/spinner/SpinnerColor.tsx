import { Spinner } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-8 flex-wrap">
      <Spinner color="#ef4444"></Spinner>
      <Spinner color="#eab308"></Spinner>
      <Spinner color="#22c55e"></Spinner>
      <Spinner color="#3b82f6"></Spinner>
      <Spinner color="#8b5cf6"></Spinner>
    </div>
  );
};

export default App;

App.code = `import { Spinner } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-8 flex-wrap">
      <Spinner color="#ef4444"></Spinner>
      <Spinner color="#eab308"></Spinner>
      <Spinner color="#22c55e"></Spinner>
      <Spinner color="#3b82f6"></Spinner>
      <Spinner color="#8b5cf6"></Spinner>
    </div>
  );
};

export default App;`;
