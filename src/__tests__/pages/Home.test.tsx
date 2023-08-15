import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Home from '@/app/page';

describe('<Home />', () => {
  test('renders initial count as 0', () => {
    render(<Home />);
    const displayElement = screen.getByTestId('display-count');
    expect(displayElement.textContent).toContain('Count: 0');
  });

  test('increments count when Increment button is clicked', () => {
    render(<Home />);
    const incrementButton = screen.getByText('Increment');
    const displayElement = screen.getByTestId('display-count');

    fireEvent.click(incrementButton);

    expect(displayElement.textContent).toContain('Count: 1');
  });

  test('decrements count when Decrement button is clicked', () => {
    render(<Home />);
    const decrementButton = screen.getByText('Decrement');
    const displayElement = screen.getByTestId('display-count');

    fireEvent.click(decrementButton);

    expect(displayElement.textContent).toContain('Count: -1');
  });

  test('resets count to 0 when Reset button is clicked', () => {
    render(<Home />);
    const incrementButton = screen.getByText('Increment');
    const resetButton = screen.getByText('Reset');
    const displayElement = screen.getByTestId('display-count');

    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);

    expect(displayElement.textContent).toContain('Count: 0');
  });

  test('renders list of posts', async () => {
    render(<Home />);

    const postTitle1 = await screen.findByText('Post 1');
    const postTitle2 = await screen.findByText('Post 2');

    expect(postTitle1.textContent).toBe('Post 1');
    expect(postTitle2.textContent).toBe('Post 2');
  });
});
