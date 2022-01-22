import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BtnGenerator from './BtnGenerator';

describe('<BtnGenerator />', () => {
  test('it should mount', () => {
    render(<BtnGenerator />);
    
    const btnGenerator = screen.getByTestId('BtnGenerator');

    expect(btnGenerator).toBeInTheDocument();
  });
});