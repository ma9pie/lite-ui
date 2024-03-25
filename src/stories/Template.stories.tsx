import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';
import React from 'react';

const meta = {
  title: 'Template',
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

const Component = () => {
  return (
    <Wrapper>
      <p>Template</p>
      <div>
        <input></input>
      </div>
      <div>
        <button>button</button>
      </div>
    </Wrapper>
  );
};

export const Template_ = {
  render: Component,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 50vh;
`;
