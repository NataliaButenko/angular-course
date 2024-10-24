import { Component, inject } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { Product } from '../../shared/product.interface';
import { ProductsService } from '../products.service';
import { MatButtonModule } from '@angular/material/button';
import { DialogAddOrEditProductComponent } from '../table/dialog-add_or_edit-product/dialog-add_or_edit-product.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'products',
  standalone: true,
  imports: [TableComponent, MatButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  public products: Product[] = [];
  private dialog = inject(MatDialog);
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts();
    this.productsService.products$.subscribe((data) => {
      this.products = data;
    });
  }
  public columns: string[] = ['product', 'sku', 'price', 'country', 'tags', 'actions'];

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddOrEditProductComponent, {
      data: {
        name: '',
        sku: '',
        price: 0,
        discount: 0,
        tags: [],
        country: '',
        isEditMode: false,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        let data = {
          name: result.name,
          price: result.price,
          discount: result.discount,
          sku: result.sku,
          isActive: true,
          countryCode: result.countryCode,
          itemUrl: `https://example.com/${result.name}`,
          tags: result.tags.join(','),
        };
        this.productsService.createProduct(data).subscribe((response) => {
          this.productsService.getProducts();
        });
      }
    });
  }
}
