import { Component, OnInit } from '@angular/core';
import { StoresService } from '../stores.service';
import { CommonModule } from '@angular/common';
import { StoreTableComponent } from '../store-table/store-table.component';
import { StoreFiltersComponent } from '../store-filters/store-filters.component';

@Component({
  selector: 'store-c',
  standalone: true,
  imports: [CommonModule, StoreTableComponent, StoreFiltersComponent],
  templateUrl: './store-c.component.html',
  styleUrl: './store-c.component.scss',
})
export class StoreCComponent implements OnInit {
  public tableLoading: boolean = false;
  public displayedColumns: string[] = [];
  public data: any[] = [];

  constructor(private storeService: StoresService) {}

  ngOnInit() {
    this.fetchData();
  }

  private fetchData() {
    this.tableLoading = true;
    this.storeService.getProducts('storeC').subscribe((data) => {
      this.data = data;
      if (data.length) {
        this.displayedColumns = Object.keys(data[0]);
      }
      this.tableLoading = false;
    });
  }

  applyFilters(filters: { [key: string]: string }) {
    this.tableLoading = true;
    this.storeService.getFilteredProducts('storeC', filters).subscribe((response) => {
      this.data = response;
      this.tableLoading = false;
    });
  }

  resetFilters() {
    this.fetchData();
  }
}
