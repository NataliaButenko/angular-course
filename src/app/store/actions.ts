import { createAction, props } from '@ngrx/store';
import { StoreProduct } from '../shared/product.interface';

export const loadProduct = createAction('[Product] Load Product');
export const loadProductSuccess = createAction(
  '[Product] Load ProductSuccess',
  props<{ products: StoreProduct[] }>()
);
