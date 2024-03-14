import type { Meta } from '@storybook/react';
import React from 'react';

const meta = {
  title: 'Template',
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

const Page = () => {
  return <div>Template</div>;
};

export const Template_ = {
  render: Page,
};
