import { Switch } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Switch trackPadding={2}></Switch>
      <Switch></Switch>
      <Switch trackPadding={4}></Switch>
    </div>
  );
};

export default App;

App.code = `import { Switch } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Switch trackPadding={2}></Switch>
      <Switch></Switch>
      <Switch trackPadding={4}></Switch>
    </div>
  );
};

export default App;`;
