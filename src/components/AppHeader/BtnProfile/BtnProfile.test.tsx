import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BtnProfile from './BtnProfile';

describe('<BtnProfile />', () => {
  test('it should mount', () => {
    render(<BtnProfile />);
    
    const btnProfile = screen.getByTestId('BtnProfile');

    expect(btnProfile).toBeInTheDocument();
  });
});