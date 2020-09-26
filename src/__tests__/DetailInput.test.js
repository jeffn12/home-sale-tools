import React from 'react';
import { render } from '@testing-library/react';
import DetailInput from '../components/DetailInput';

describe('DetailInput view', () => {
  test('has 5 data inputs', () => {});

  test('has an input for amount owed', () => {
    const { getByLabelText } = render(<DetailInput />);
    const inputElement = getByLabelText(/amountOwed/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('has an input for commission rate', () => {
    const { getByLabelText } = render(<DetailInput />);
    const inputElement = getByLabelText(/commissionRate/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('has an input for transfer tax rate', () => {
    const { getByLabelText } = render(<DetailInput />);
    const inputElement = getByLabelText(/transferTaxRate/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('has an input for attorney fee', () => {
    const { getByLabelText } = render(<DetailInput />);
    const inputElement = getByLabelText(/attorneyFee/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('has an input for other fees', () => {
    const { getByLabelText } = render(<DetailInput />);
    const inputElement = getByLabelText(/otherFees/i);
    expect(inputElement).toBeInTheDocument();
  });
});
