import { render, screen } from '@testing-library/react';
import React from 'react';

import Button from '@/components/common/Button';

test('', async () => {
  render(<Button></Button>);
  await screen.findAllByText(/Button/);
});
