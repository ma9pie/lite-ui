import { Divider } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <Divider size={1}></Divider>
      <Divider size={2}></Divider>
      <Divider size={3}></Divider>
      <Divider size={4}></Divider>
    </div>
  );
};

export default App;

App.code = `import { Divider } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <Divider size={1}></Divider>
      <Divider size={2}></Divider>
      <Divider size={3}></Divider>
      <Divider size={4}></Divider>
    </div>
  );
};

export default App;`;
