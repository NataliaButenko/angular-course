import { Component, OnInit } from '@angular/core';
import { StoresService } from '../stores.service';
import { CommonModule } from '@angular/common';
import { StoreTableComponent } from '../store-table/store-table.component';
import { StoreFiltersComponent } from '../store-filters/store-filters.component';

@Component({
  selector: 'store-b',
  standalone: true,
  imports: [CommonModule, StoreTableComponent, StoreFiltersComponent],
  templateUrl: './store-b.component.html',
  styleUrl: './store-b.component.scss',
})
export class StoreBComponent implements OnInit {
  public displayedColumns: string[] = [];
  public data: any[] = [];

  constructor(private storeService: StoresService) {}

  ngOnInit() {
    this.fetchData();
  }

  private fetchData() {
    this.storeService.getProducts('storeB').subscribe((data) => {
      this.data = data;
      if (data.length) {
        this.displayedColumns = Object.keys(data[0]);
      }
    });
  }

  applyFilters(filters: { [key: string]: string }) {
    this.storeService.getFilteredProducts('storeB', filters).subscribe((response) => {
      this.data = response;
    });
  }

  resetFilters() {
    this.fetchData();
  }
}
