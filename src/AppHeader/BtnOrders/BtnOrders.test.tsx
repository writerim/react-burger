import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BtnOrders from './BtnOrders';

describe('<BtnOrders />', () => {
  test('it should mount', () => {
    render(<BtnOrders />);
    
    const btnOrders = screen.getByTestId('BtnOrders');

    expect(btnOrders).toBeInTheDocument();
  });
});