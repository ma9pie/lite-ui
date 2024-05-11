import { Spinner } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-8 flex-wrap">
      <Spinner duration={500}></Spinner>
      <Spinner></Spinner>
      <Spinner duration={1000}></Spinner>
    </div>
  );
};

export default App;

App.code = `import { Spinner } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-8 flex-wrap">
      <Spinner duration={500}></Spinner>
      <Spinner></Spinner>
      <Spinner duration={1000}></Spinner>
    </div>
  );
};

export default App;`;
