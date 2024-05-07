import { Avatar } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <Avatar size="xs" src="https://i.pravatar.cc/150?img=5"></Avatar>
      <Avatar size="sm" src="https://i.pravatar.cc/150?img=11"></Avatar>
      <Avatar size="md" src="https://i.pravatar.cc/150?img=37"></Avatar>
      <Avatar size="lg" src="https://i.pravatar.cc/150?img=49"></Avatar>
      <Avatar size="xl" src="https://i.pravatar.cc/150?img=67"></Avatar>
    </div>
  );
};

export default App;

App.code = `import { Avatar } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <Avatar size="xs" src="https://i.pravatar.cc/150?img=5"></Avatar>
      <Avatar size="sm" src="https://i.pravatar.cc/150?img=11"></Avatar>
      <Avatar size="md" src="https://i.pravatar.cc/150?img=37"></Avatar>
      <Avatar size="lg" src="https://i.pravatar.cc/150?img=49"></Avatar>
      <Avatar size="xl" src="https://i.pravatar.cc/150?img=67"></Avatar>
    </div>
  );
};

export default App;`;
