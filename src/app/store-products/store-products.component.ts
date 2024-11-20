import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StoreProduct } from '../shared/product.interface';
import { loadProduct } from '../store/actions';
import { selectAllProduct } from '../store/select';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'store-products',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './store-products.component.html',
  styleUrl: './store-products.component.scss',
})
export class StoreProductsComponent {
  products$: Observable<StoreProduct[]>;

  constructor(private store: Store) {
    console.log('this.store', this.store);
    this.products$ = this.store.select(selectAllProduct);
  }

  ngOnInit(): void {
    this.store.dispatch(loadProduct());
    console.log(' this.products', this.products$);
    this.products$ &&
      this.products$.subscribe((v) => {
        console.log(v);
      });
  }
}
