import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardList from './CardList';

describe('<CardList />', () => {
  test('it should mount', () => {
    render(<CardList />);
    
    const cardList = screen.getByTestId('CardList');

    expect(cardList).toBeInTheDocument();
  });
});