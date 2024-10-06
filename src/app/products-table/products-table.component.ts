import { Component, HostListener, OnInit } from '@angular/core';
import { ProductPriceComponent } from '../product-price/product-price.component';
import { IProductTableItem } from '../shared/product.interface';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { ProductsService } from '../products-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductPriceComponent, SideMenuComponent],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.scss',
})
export class ProductsTableComponent implements OnInit {
  public products: IProductTableItem[] = [];

  public selectedProduct: IProductTableItem | null = null;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  @HostListener('document:click', ['$event']) onDocumentClick(event: Event) {
    if (!event.target || !(event.target as HTMLElement).closest('tr')) {
      this.closeSideMenu(event);
    }
  }

  public onProductClick(product: IProductTableItem, event: MouseEvent): void {
    if (this.selectedProduct && this.selectedProduct.id === product.id) {
      this.selectedProduct = null;
    } else {
      this.selectedProduct = product;
    }
    event.stopPropagation();
  }

  private closeSideMenu(event: Event): void {
    if (this.selectedProduct) {
      this.selectedProduct = null;
    }
  }

  public handleSelectedChange(id: number): void {
    this.productsService.handleSelectItem(id);
    this.products = this.productsService.getProducts();
  }

  public selectClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}
