import { Button } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex gap-4">
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
    </div>
  );
};

export default App;

App.code = `import { Button } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex gap-4">
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
    </div>
  );
};

export default App;`;
