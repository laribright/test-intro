import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Button from '@/components/Button/Button';

describe('<Button />', () => {
  test('renders label correctly', () => {
    const label = 'Click';
    const onClickMock = jest.fn();
    render(<Button label={label} onClick={onClickMock} />);

    const buttonElement = screen.getByText(label);

    expect(buttonElement.textContent).toEqual(label);
  });

  test('calls onClick when clicked', () => {
    const testId = 'btn';
    const label = 'Click';
    const onClickMock = jest.fn();

    render(<Button label={label} onClick={onClickMock} />);

    const buttonElement = screen.getByTestId(testId);

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
