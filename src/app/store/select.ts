import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from 'src/app/store/reduser';

export const selectProductState = createFeatureSelector<ProductsState>('products');

export const selectAllProduct = createSelector(
  selectProductState,
  (state: ProductsState) => state.products
);
