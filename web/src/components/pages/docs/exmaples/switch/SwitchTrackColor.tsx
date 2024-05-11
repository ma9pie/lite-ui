import { Switch } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Switch defaultChecked trackColor="#ef4444"></Switch>
      <Switch defaultChecked trackColor="#eab308"></Switch>
      <Switch defaultChecked trackColor="#22c55e"></Switch>
      <Switch defaultChecked trackColor="#3b82f6"></Switch>
      <Switch defaultChecked trackColor="#8b5cf6"></Switch>
    </div>
  );
};

export default App;

App.code = `import { Switch } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Switch defaultChecked trackColor="#ef4444"></Switch>
      <Switch defaultChecked trackColor="#eab308"></Switch>
      <Switch defaultChecked trackColor="#22c55e"></Switch>
      <Switch defaultChecked trackColor="#3b82f6"></Switch>
      <Switch defaultChecked trackColor="#8b5cf6"></Switch>
    </div>
  );
};

export default App;`;
