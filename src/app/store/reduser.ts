import { createReducer, on } from '@ngrx/store';
import { loadProductSuccess } from 'src/app/store/actions';
import { StoreProduct } from '../shared/product.interface';

export interface ProductsState {
  products: StoreProduct[];
}

export const initialState: ProductsState = {
  products: [],
};

export const productReducer = createReducer(
  initialState,
  on(loadProductSuccess, (state, { products }) => {
    return {
      ...state,
      products,
    };
  })
);
