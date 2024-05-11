import { Spinner } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-8 flex-wrap">
      <Spinner></Spinner>
      <Spinner lineWidth={4}></Spinner>
      <Spinner lineWidth={5}></Spinner>
    </div>
  );
};

export default App;

App.code = `import { Spinner } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-8 flex-wrap">
      <Spinner></Spinner>
      <Spinner lineWidth={4}></Spinner>
      <Spinner lineWidth={5}></Spinner>
    </div>
  );
};

export default App;`;
