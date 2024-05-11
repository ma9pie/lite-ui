import { Switch } from '@ma9pie/lite-ui';
import React, { useState } from 'react';

const App = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (value: boolean) => {
    setChecked(value);
  };

  return (
    <div className="flex items-center gap-2">
      <Switch onChange={handleChange}></Switch>
      <p>{checked ? 'on' : 'off'}</p>
    </div>
  );
};

export default App;

App.code = `import { Switch } from '@ma9pie/lite-ui';
import React, { useState } from 'react';

const App = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (value: boolean) => {
    setChecked(value);
  };

  return (
    <div className="flex items-center gap-2">
      <Switch onChange={handleChange}></Switch>
      <p>{checked ? 'on' : 'off'}</p>
    </div>
  );
};

export default App;`;
