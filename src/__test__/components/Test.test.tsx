import { render, screen } from '@testing-library/react';
import React from 'react';

test('', async () => {
  render(<div>test</div>);
  await screen.findAllByText(/test/);
});
