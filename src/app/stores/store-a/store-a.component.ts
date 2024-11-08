import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterConfig } from 'src/app/shared/filters.interface';
import { StoresService } from '../stores.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'store-a',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  templateUrl: './store-a.component.html',
  styleUrl: './store-a.component.scss',
})
export class StoreAComponent {
  public filters: FilterConfig[] = [];
  public filtersForm?: FormGroup;
  public filteredData: any[] = [];
  public displayedColumns: string[] = [];
  private data: any[] = [];

  constructor(private storeService: StoresService, private fb: FormBuilder) {}

  ngOnInit() {
    this.fetchFilters();
    this.fetchData();
    this.filtersForm = this.fb.group({});
  }

  private fetchFilters() {
    this.storeService.getFilters('storeA').subscribe((filters) => {
      this.filters = filters;
      filters.forEach((filter) => {
        this.filtersForm?.addControl(filter.name, this.fb.control(''));
      });
    });
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

  applyFilters() {
    const filters = this.filtersForm?.value;
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
    this.filtersForm?.reset();
    this.filteredData = [...this.data];
  }
}
