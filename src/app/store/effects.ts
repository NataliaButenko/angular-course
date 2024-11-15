import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { loadProduct, loadProductSuccess } from 'src/app/store/actions';
import { map, mergeMap } from 'rxjs/operators';
import { ProductsService } from '../shared/store-products.service';
import { StoreProduct } from '../shared/product.interface';

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private productService: ProductsService) {}

  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProduct),
      mergeMap(() => {
        console.log('mergeMap', mergeMap);
        return this.productService.getProducts().pipe(
          map((products: StoreProduct[]) => {
            console.log('products', products);
            return loadProductSuccess({ products });
          })
        );
      })
    )
  );
}
