import { Component, OnInit } from '@angular/core';
import { StoresService } from '../stores.service';
import { CommonModule } from '@angular/common';
import { StoreTableComponent } from '../store-table/store-table.component';
import { StoreFiltersComponent } from '../store-filters/store-filters.component';

@Component({
  selector: 'store-a',
  standalone: true,
  imports: [CommonModule, StoreTableComponent, StoreFiltersComponent],
  templateUrl: './store-a.component.html',
  styleUrl: './store-a.component.scss',
})
export class StoreAComponent implements OnInit {
  public filteredData: any[] = [];
  public displayedColumns: string[] = [];
  private data: any[] = [];

  constructor(private storeService: StoresService) {}

  ngOnInit() {
    this.fetchData();
  }

  private fetchData() {
    this.storeService.getProducts('storeA').subscribe((data) => {
      this.data = [...data];
      this.filteredData = [...data];
      if (data.length) {
        this.displayedColumns = Object.keys(data[0]);
      }
    });
  }

  applyFilters(filters: { [key: string]: string }) {
    this.filteredData = this.data.filter((item) => {
      return Object.keys(filters).every((key) => {
        if (filters[key] === undefined || filters[key] === null) return true;
        if (item[key] === undefined) return true;
        const productValue = item[key].toString().toLowerCase();
        const filterValue = filters[key].toString().toLowerCase();

        return productValue.includes(filterValue);
      });
    });
  }

  resetFilters() {
    this.filteredData = [...this.data];
  }
}
