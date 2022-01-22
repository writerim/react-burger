import React, { FC } from 'react';
import styles from './BurgerIngredients.module.css';

interface BurgerIngredientsProps {}

const BurgerIngredients: FC<BurgerIngredientsProps> = () => (
  <div  data-testid="BurgerIngredients">
    BurgerIngredients Component
  </div>
);

export default BurgerIngredients;
