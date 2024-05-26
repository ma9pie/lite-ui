import { Button } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="#ef4444">red</Button>
      <Button color="limegreen">green</Button>
      <Button color="rgb(139 92 246)">violet</Button>
    </div>
  );
};

export default App;

App.code = `import { Button } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="#ef4444">red</Button>
      <Button color="limegreen">green</Button>
      <Button color="rgb(139 92 246)">violet</Button>
    </div>
  );
};

export default App;`;
