import type { Meta } from '@storybook/react';
import React from 'react';

import { List } from '@/components';
import { ListProps } from '@/types';

const meta = {
  title: 'List',
  args: { tabWidth: 16, gap: 8 },
  component: List,
} satisfies Meta;

export default meta;

const Component = (props: ListProps) => {
  return (
    <>
      <List {...props}>
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

      <List {...props}>
        <List.Ul>
          <List.Li>1</List.Li>
          <List.Ul>
            <List.Li>1</List.Li>
            <List.Ul>
              <List.Li>1</List.Li>
              <List.Ul>
                <List.Li>1</List.Li>
                <List.Ul>
                  <List.Li>1</List.Li>
                  <List.Ul>
                    <List.Li>1</List.Li>
                    <List.Ul>
                      <List.Li>1</List.Li>
                    </List.Ul>
                  </List.Ul>
                </List.Ul>
              </List.Ul>
            </List.Ul>
          </List.Ul>
        </List.Ul>
      </List>
    </>
  );
};

export const List_ = {
  render: Component,
};
