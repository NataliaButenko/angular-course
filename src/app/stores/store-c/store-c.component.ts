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
  selector: 'store-c',
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
  templateUrl: './store-c.component.html',
  styleUrl: './store-c.component.scss',
})
export class StoreCComponent {
  public filtersLoading: boolean = false;
  public tableLoading: boolean = false;
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
    this.filtersLoading = true;
    this.storeService.getFilters('storeC').subscribe((filters) => {
      this.filters = filters;
      filters.forEach((filter) => {
        this.filtersForm?.addControl(filter.name, this.fb.control(''));
      });
      this.filtersLoading = false;
    });
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

  applyFilters() {
    this.tableLoading = true;
    const filters = this.filtersForm?.value;
    this.storeService.getFilteredProducts('storeC', filters).subscribe((response) => {
      this.data = response;
      this.tableLoading = false;
    });
  }

  resetFilters() {
    this.fetchData();
    this.filtersForm?.reset();
  }
}
