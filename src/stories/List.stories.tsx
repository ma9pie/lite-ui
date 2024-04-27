import type { Meta } from '@storybook/react';
import React from 'react';

import { List } from '@/components';
import { ListProps } from '@/types';

// for test
const generateTestData = (key: string, len: number) => {
  return Array(len)
    .fill(null)
    .map((_, idx) => {
      const value = `${key}-${idx + 1}`;
      return { key: value, value: value };
    });
};

const TEST_DATA = [
  {
    key: '1',
    value: '1',
    children: [
      ...generateTestData('1', 2),
      {
        key: '1-3',
        value: '1-3',
        children: [
          ...generateTestData('1-3', 2),
          {
            key: '1-3-3',
            value: '1-3-3',
            children: generateTestData('1-3-3', 2),
          },
        ],
      },
    ],
  },
  {
    key: '2',
    value: '2',
    children: [
      ...generateTestData('2', 2),
      {
        key: '2-3',
        value: '2-3',
        children: generateTestData('2-3', 3),
      },
    ],
  },
  {
    key: '3',
    value: '3',
    children: generateTestData('3', 4),
  },
  {
    key: '4',
    value: '4',
  },
  {
    key: '5',
    value: '5',
  },
];

const meta = {
  title: 'List',
  args: { list: TEST_DATA, tabWidth: 16, gap: 8 },
  component: List,
} satisfies Meta;

export default meta;

const Component = (props: ListProps) => {
  return (
    <>
      <List {...props}></List>
    </>
  );
};

export const List_ = {
  render: Component,
};
