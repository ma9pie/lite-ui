import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from '@/components/common/text';

describe('Component test', () => {
  test('Text', () => {
    render(<Text>text</Text>);
    screen.findAllByText(/text/);
  });
});
