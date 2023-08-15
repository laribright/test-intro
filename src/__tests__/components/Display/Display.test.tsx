import React from 'react';
import { render, screen } from '@testing-library/react';

import Display from '@/components/Display/Display';

test('renders the correct count', () => {
  const count = 5;

  render(<Display count={count} />);

  const displayElement = screen.getByTestId('display-count');

  expect(displayElement.textContent).toContain(`Count: ${count}`);
});
