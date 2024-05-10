import { List } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <List gap={32}>
      <List.Ul>
        <List.Li>Lorem ipsum dolor</List.Li>
        <List.Li>sit amet consectetur</List.Li>
        <List.Li>adipisicing elit Possimus</List.Li>
        <List.Ul>
          <List.Li>repellat nemo beatae</List.Li>
          <List.Li>fugiat illo minus</List.Li>
          <List.Li>labore ipsum repellendus</List.Li>
          <List.Ul>
            <List.Li>aut ullam quisquam</List.Li>
            <List.Li>consequatur dolore hic</List.Li>
            <List.Li>magni explicabo cupiditate</List.Li>
          </List.Ul>
        </List.Ul>
      </List.Ul>
    </List>
  );
};

export default App;

App.code = `import { List } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  return (
    <List gap={32}>
      <List.Ul>
        <List.Li>Lorem ipsum dolor</List.Li>
        <List.Li>sit amet consectetur</List.Li>
        <List.Li>adipisicing elit Possimus</List.Li>
        <List.Ul>
          <List.Li>repellat nemo beatae</List.Li>
          <List.Li>fugiat illo minus</List.Li>
          <List.Li>labore ipsum repellendus</List.Li>
          <List.Ul>
            <List.Li>aut ullam quisquam</List.Li>
            <List.Li>consequatur dolore hic</List.Li>
            <List.Li>magni explicabo cupiditate</List.Li>
          </List.Ul>
        </List.Ul>
      </List.Ul>
    </List>
  );
};

export default App;`;
