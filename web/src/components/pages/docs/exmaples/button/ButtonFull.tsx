import { Button } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Button>Button</Button>
      <Button full>Full Button</Button>
    </div>
  );
};

export default App;

App.code = `import { Button } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Button>Button</Button>
      <Button full>Full Button</Button>
    </div>
  );
};

export default App;`;
