import { Avatar, Table, TableField } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  const field: TableField[] = [
    {
      key: 'name',
      value: 'Name',
      flex: 2,
      align: 'start',
      render: ({ imgNum, name }) => (
        <div className="flex items-center gap-2">
          <Avatar src={'https://i.pravatar.cc/150?img=' + imgNum}></Avatar>
          <p>{name}</p>
        </div>
      ),
    },
    { key: 'age', value: 'Age', flex: 1, align: 'center' },
    { key: 'address', value: 'Address', flex: 3, align: 'end' },
  ];
  const rows = [
    {
      key: 0,
      imgNum: 11,
      name: 'John Smith',
      age: 25,
      address: '123 Main Street, New York',
    },
    {
      key: 1,
      imgNum: 49,
      name: 'Emily Johnson',
      age: 30,
      address: '456 Oak Avenue, Los Angeles',
    },
    {
      key: 2,
      imgNum: 67,
      name: 'Michael Brown',
      age: 28,
      address: '789 Elm Street, Chicago',
    },
  ];

  return <Table minWidth={600} field={field} rows={rows}></Table>;
};

export default App;

App.code = `import { Avatar, Table, TableField } from '@ma9pie/lite-ui';
import React from 'react';

const App = () => {
  const field: TableField[] = [
    {
      key: 'name',
      value: 'Name',
      flex: 2,
      align: 'start',
      render: ({ imgNum, name }) => (
        <div className="flex items-center gap-2">
          <Avatar src={'https://i.pravatar.cc/150?img=' + imgNum}></Avatar>
          <p>{name}</p>
        </div>
      ),
    },
    { key: 'age', value: 'Age', flex: 1, align: 'center' },
    { key: 'address', value: 'Address', flex: 3, align: 'end' },
  ];
  const rows = [
    {
      key: 0,
      imgNum: 11,
      name: 'John Smith',
      age: 25,
      address: '123 Main Street, New York',
    },
    {
      key: 1,
      imgNum: 49,
      name: 'Emily Johnson',
      age: 30,
      address: '456 Oak Avenue, Los Angeles',
    },
    {
      key: 2,
      imgNum: 67,
      name: 'Michael Brown',
      age: 28,
      address: '789 Elm Street, Chicago',
    },
  ];

  return <Table minWidth={600} field={field} rows={rows}></Table>;
};

export default App;`;
