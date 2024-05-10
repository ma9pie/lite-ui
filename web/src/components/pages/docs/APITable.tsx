import { Table } from '@ma9pie/lite-ui';
import React from 'react';

import { APITableRowItem } from '@/types';

interface Props {
  rows: APITableRowItem[];
}

const APITable = ({ rows }: Props) => {
  return (
    <Table
      className="text-sm"
      minWidth={600}
      field={[
        { key: 'property', value: 'Property', flex: 2 },
        {
          key: 'type',
          value: 'Type',
          flex: 3,
          render: ({ type }) => type.join(' | '),
        },
        { key: 'description', value: 'Description', flex: 3 },
        {
          key: 'defaultValue',
          value: 'Default',
          flex: 2,
          render: ({ defaultValue }) => JSON.stringify(defaultValue) || '-',
        },
      ]}
      rows={rows.map((item, idx) => ({ key: idx, ...item }))}
    ></Table>
  );
};

export default APITable;
