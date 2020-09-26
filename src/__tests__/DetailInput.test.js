import React from 'react';
import { render } from '@testing-library/react';
import DetailInput from '../components/DetailInput';

describe('DetailInput view', () => {
  test('has an input for amount owed', () => {
    const { getByLabelText } = render(<DetailInput />);
    const inputElement = getByLabelText(/amountOwed/i);
    expect(inputElement).toBeInTheDocument();
  });
});
