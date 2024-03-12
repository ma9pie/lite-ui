import { render, screen } from '@testing-library/react';
import React from 'react';

import { Test } from '@/components';

test('', async () => {
  render(<Test></Test>);
  await screen.findAllByText(/Test/);
});
