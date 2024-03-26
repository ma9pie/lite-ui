import type { Meta } from '@storybook/react';
import React from 'react';

import {} from '@/components';
import {} from '@/types';

const meta = {
  title: 'Template',
  args: {},
  component: () => <div></div>,
} satisfies Meta;

export default meta;

const Component = (props: any) => {
  return <div>Template</div>;
};

export const Template_ = {
  render: Component,
};
