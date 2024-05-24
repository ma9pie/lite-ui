import { Table } from '@ma9pie/lite-ui';
import React from 'react';
import tw, { styled } from 'twin.macro';

import { ComponentPropsData } from '@/types';

interface Props {
  rows: ComponentPropsData[];
}

const APITable = ({ rows }: Props) => {
  return (
    <Table
      className="text-sm"
      minWidth={800}
      field={[
        {
          key: 'property',
          value: 'Property',
          flex: 1,
          render: ({ property }) => <Item>{property}</Item>,
        },
        {
          key: 'type',
          value: 'Type',
          flex: 2,
          render: ({ type }) => <Item>{type.join(' | ')}</Item>,
        },
        {
          key: 'description',
          value: 'Description',
          flex: 2,
          render: ({ description }) => <Item>{description}</Item>,
        },
        {
          key: 'defaultValue',
          value: 'Default',
          flex: 1,
          render: ({ defaultValue }) => (
            <Item>{JSON.stringify(defaultValue) || '-'}</Item>
          ),
        },
      ]}
      rows={rows.map((item, idx) => ({ key: idx, ...item }))}
    ></Table>
  );
};

export default APITable;

const Item = styled.div`
  ${tw`sm:py-1`};
`;
