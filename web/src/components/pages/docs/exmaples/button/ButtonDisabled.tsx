import { Button } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  const handleClickButton = () => {
    alert('Clicked!');
  };

  return (
    <div className="flex gap-4 flex-wrap">
      <Button onClick={handleClickButton}>Button</Button>
      <Button disabled onClick={handleClickButton}>
        Disabled
      </Button>
    </div>
  );
};

export default App;

App.code = `import { Button } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  const handleClickButton = () => {
    alert('Clicked!');
  };

  return (
    <div className="flex gap-4 flex-wrap">
      <Button onClick={handleClickButton}>Button</Button>
      <Button disabled onClick={handleClickButton}>
        Disabled
      </Button>
    </div>
  );
};

export default App;`;
