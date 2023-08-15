// src/components/__tests__/PostCard.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';

import PostCard from '@/components/PostCard/PostCard';

test('renders post card correctly', () => {
  const post = { id: 1, title: 'Test Post', body: 'Test Body' };
  render(<PostCard post={post} />);

  const titleElement = screen.getByText('Test Post');
  const bodyElement = screen.getByText('Test Body');

  expect(titleElement.textContent).toBe('Test Post');
  expect(bodyElement.textContent).toBe('Test Body');
});
