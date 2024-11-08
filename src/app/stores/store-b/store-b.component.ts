import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterConfig } from 'src/app/shared/filters.interface';
import { StoresService } from '../stores.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'store-b',
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
  templateUrl: './store-b.component.html',
  styleUrl: './store-b.component.scss',
})
export class StoreBComponent {
  public filters: FilterConfig[] = [];
  public filtersForm?: FormGroup;
  public displayedColumns: string[] = [];
  public data: any[] = [];

  constructor(private storeService: StoresService, private fb: FormBuilder) {}

  ngOnInit() {
    this.fetchFilters();
    this.fetchData();
    this.filtersForm = this.fb.group({});
  }

  private fetchFilters() {
    this.storeService.getFilters('storeB').subscribe((filters) => {
      this.filters = filters;
      filters.forEach((filter) => {
        this.filtersForm?.addControl(filter.name, this.fb.control(''));
      });
    });
  }

  private fetchData() {
    this.storeService.getProducts('storeB').subscribe((data) => {
      this.data = data;
      if (data.length) {
        this.displayedColumns = Object.keys(data[0]);
      }
    });
  }

  applyFilters() {
    const filters = this.filtersForm?.value;
    this.storeService.getFilteredProducts('storeB', filters).subscribe((response) => {
      this.data = response;
    });
  }

  resetFilters() {
    this.fetchData();
    this.filtersForm?.reset();
  }
}
