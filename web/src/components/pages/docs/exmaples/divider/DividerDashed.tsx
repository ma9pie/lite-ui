import { Divider } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <Divider dashed strokeDasharray={1}></Divider>
      <Divider dashed></Divider>
      <Divider dashed strokeDasharray={3}></Divider>
      <Divider dashed strokeDasharray={4}></Divider>
      <Divider dashed strokeDasharray={5}></Divider>
    </div>
  );
};

export default App;

App.code = `import { Divider } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <Divider dashed strokeDasharray={1}></Divider>
      <Divider dashed></Divider>
      <Divider dashed strokeDasharray={3}></Divider>
      <Divider dashed strokeDasharray={4}></Divider>
      <Divider dashed strokeDasharray={5}></Divider>
    </div>
  );
};

export default App;`;
