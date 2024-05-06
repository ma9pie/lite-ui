import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';
import React from 'react';

import { Table } from '@/components';
import { TableField, TableProps } from '@/types';

const meta = {
  title: 'Table',
  args: {},
  component: Table,
} satisfies Meta;

export default meta;

const Component = (props: TableProps) => {
  const field: TableField[] = [
    {
      key: 'name',
      value: 'Name',
      flex: 2,
      align: 'start',
      render: ({ imgNum, name }) => (
        <NameContainer>
          <ImageWrapper>
            <Image
              src={`https://i.pravatar.cc/150?img=${imgNum}`}
              width={32}
              height={32}
              alt="img"
            ></Image>
          </ImageWrapper>
          <NameText>{name}</NameText>
        </NameContainer>
      ),
    },
    { key: 'age', value: 'Age', flex: 1, align: 'center' },
    { key: 'address', value: 'Address', flex: 3, align: 'end' },
  ];
  const rows = [
    {
      key: 0,
      imgNum: '11',
      name: 'John Smith',
      age: 25,
      address: '123 Main Street, New York',
    },
    {
      key: 1,
      imgNum: '49',
      name: 'Emily Johnson',
      age: 30,
      address: '456 Oak Avenue, Los Angeles',
    },
    {
      key: 2,
      imgNum: '67',
      name: 'Michael Brown',
      age: 28,
      address: '789 Elm Street, Chicago',
    },
  ];

  return <Table {...props} minWidth={600} field={field} rows={rows}></Table>;
};

export const Table_ = {
  render: Component,
};

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const ImageWrapper = styled.div``;
const Image = styled.img`
  border-radius: 100%;
  overflow: hidden;
`;
const NameText = styled.p``;
