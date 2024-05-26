import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';
import React from 'react';

import { Button } from '@/components';
import { ButtonProps } from '@/types';

const meta = {
  title: 'Button',
  args: {},
  component: Button,
} satisfies Meta;

export default meta;

const Component = (props: ButtonProps) => {
  return (
    <Container>
      <Button {...props}>Button</Button>
      <Button color="default">Button</Button>
      <Button color="primary">Button</Button>
      <Button color="limegreen">Button</Button>
      <Button>ButtonButtonButtonButton</Button>
      <Button full>Button</Button>
    </Container>
  );
};

export const Button_ = {
  render: Component,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
