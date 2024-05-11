import { Switch } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-2">
      <Switch></Switch>
      <Switch disabled></Switch>
      <Switch defaultChecked disabled></Switch>
    </div>
  );
};

export default App;

App.code = `import { Switch } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-2">
      <Switch></Switch>
      <Switch disabled></Switch>
      <Switch defaultChecked disabled></Switch>
    </div>
  );
};

export default App;`;
