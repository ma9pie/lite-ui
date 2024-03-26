import type { Meta } from '@storybook/react';
import React, { useState } from 'react';

import { Switch } from '@/components';
import { SwitchProps } from '@/types';

const meta = {
  title: 'Switch',
  args: {
    defaultChecked: false,
    size: 32,
    trackPadding: 4,
    duration: 150,
    disabled: false,
  },
  component: Switch,
} satisfies Meta;

export default meta;

const Component = (props: SwitchProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (value: boolean) => {
    setChecked(value);
  };

  return (
    <Switch
      {...props}
      defaultChecked={checked}
      onChange={handleChange}
    ></Switch>
  );
};

export const Switch_ = {
  render: Component,
};
