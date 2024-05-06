import { Alert } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert status="success">success</Alert>
      <Alert status="info">info</Alert>
      <Alert status="warn">warn</Alert>
      <Alert status="error">error</Alert>
    </div>
  );
};

export default App;

App.code = `import { Alert } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert status="success">success</Alert>
      <Alert status="info">info</Alert>
      <Alert status="warn">warn</Alert>
      <Alert status="error">error</Alert>
    </div>
  );
};

export default App;`;
