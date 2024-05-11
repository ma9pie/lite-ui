import { Avatar } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <Avatar src="https://i.pravatar.cc/150?img=11"></Avatar>
      <Avatar></Avatar>
    </div>
  );
};

export default App;

App.code = `import { Avatar } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <Avatar src="https://i.pravatar.cc/150?img=11"></Avatar>
      <Avatar></Avatar>
    </div>
  );
};

export default App;`;
