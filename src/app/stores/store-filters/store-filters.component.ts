import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FilterConfig } from 'src/app/shared/filters.interface';
import { StoresService } from '../stores.service';

@Component({
  selector: 'store-filters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  templateUrl: './store-filters.component.html',
  styleUrl: './store-filters.component.scss',
})
export class StoreFiltersComponent implements OnInit {
  @Input() storeName: 'storeA' | 'storeB' | 'storeC' = 'storeA';
  @Output() applyFilters = new EventEmitter<{ [key: string]: string }>();
  @Output() resetFilters = new EventEmitter<unknown>();
  public filtersLoading: boolean = false;
  public filters: FilterConfig[] = [];
  public filtersForm?: FormGroup;

  constructor(private storeService: StoresService, private fb: FormBuilder) {}

  ngOnInit() {
    this.fetchFilters();
    this.filtersForm = this.fb.group({});
  }

  private fetchFilters() {
    this.filtersLoading = true;
    this.storeService.getFilters(this.storeName).subscribe((filters) => {
      this.filters = filters;
      filters.forEach((filter) => {
        this.filtersForm?.addControl(filter.name, this.fb.control(''));
      });
      this.filtersLoading = false;
    });
  }

  onApply() {
    const filters = this.filtersForm?.value;
    this.applyFilters.emit(filters);
  }

  onReset() {
    this.resetFilters.emit();
    this.filtersForm?.reset();
  }
}
