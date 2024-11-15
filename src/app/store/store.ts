import { productReducer } from 'src/app/store/reduser';
import { ProductsEffects } from 'src/app/store/effects';

export const store = {
  products: productReducer,
};

export const effects = [ProductsEffects];
