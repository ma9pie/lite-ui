import { Table } from '@ma9pie/lite-ui';
import React from 'react';

import { APITableRowItem } from '@/types';

interface Props {
  rows: APITableRowItem[];
}

const APITable = ({ rows }: Props) => {
  return (
    <Table
      minWidth={600}
      field={[
        { key: 'property', value: 'Property' },
        {
          key: 'type',
          value: 'Type',
          render: ({ type }) => type.join(' | '),
        },
        { key: 'description', value: 'Description' },
        {
          key: 'defaultValue',
          value: 'Default',
          render: ({ defaultValue }) => JSON.stringify(defaultValue) || '-',
        },
      ]}
      rows={rows}
    ></Table>
  );
};

export default APITable;
