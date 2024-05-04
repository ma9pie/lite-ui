import { Alert } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert>Alert</Alert>
      <Alert iconSize={28}>Alert</Alert>
      <Alert hideIcon>Alert</Alert>
    </div>
  );
};

export default App;

App.code = `import { Alert } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert>Alert</Alert>
      <Alert iconSize={28}>Alert</Alert>
      <Alert hideIcon>Alert</Alert>
    </div>
  );
};

export default App;`;
