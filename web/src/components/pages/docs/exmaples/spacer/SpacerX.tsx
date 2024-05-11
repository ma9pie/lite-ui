import { Spacer } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex">
      <div className="w-10 h-10 bg-neutral-400"></div>
      <Spacer x={16}></Spacer>
      <div className="w-10 h-10 bg-neutral-400"></div>
      <Spacer x={24}></Spacer>
      <div className="w-10 h-10 bg-neutral-400"></div>
      <Spacer x={32}></Spacer>
      <div className="w-10 h-10 bg-neutral-400"></div>
    </div>
  );
};

export default App;

App.code = `import { Spacer } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex">
      <div className="w-10 h-10 bg-neutral-400"></div>
      <Spacer x={16}></Spacer>
      <div className="w-10 h-10 bg-neutral-400"></div>
      <Spacer x={24}></Spacer>
      <div className="w-10 h-10 bg-neutral-400"></div>
      <Spacer x={32}></Spacer>
      <div className="w-10 h-10 bg-neutral-400"></div>
    </div>
  );
};

export default App;`;
