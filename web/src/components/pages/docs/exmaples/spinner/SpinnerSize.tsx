import { Spinner } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-8 flex-wrap">
      <Spinner size={24}></Spinner>
      <Spinner></Spinner>
      <Spinner size={48}></Spinner>
    </div>
  );
};

export default App;

App.code = `import { Spinner } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-8 flex-wrap">
      <Spinner size={24}></Spinner>
      <Spinner></Spinner>
      <Spinner size={64}></Spinner>
    </div>
  );
};

export default App;`;
