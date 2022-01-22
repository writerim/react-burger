import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BurgerIngredients from './BurgerIngredients';

describe('<BurgerIngredients />', () => {
  test('it should mount', () => {
    render(<BurgerIngredients />);
    
    const burgerIngredients = screen.getByTestId('BurgerIngredients');

    expect(burgerIngredients).toBeInTheDocument();
  });
});