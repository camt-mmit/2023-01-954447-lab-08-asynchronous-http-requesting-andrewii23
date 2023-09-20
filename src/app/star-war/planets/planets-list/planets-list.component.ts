import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List, Planet, SearchData } from '../../model';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-planets-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss'],
})
export class PlanetsListComponent {
  private readonly fb = inject(FormBuilder).nonNullable;

  protected readonly formGroup = this.fb.group({
    search: [''],
    page: [''],
  });

  @Input({ required: true }) data!: List<Planet>;

  @Input() set searchData(searchData: SearchData) {
    this.formGroup.setValue({
      search: '',
      page: '',
      ...searchData,
    });
  }

  @Output() readonly searchDataChange = new EventEmitter<SearchData>();

  private emitSearchData(): void {
    const value = this.formGroup.value;

    this.searchDataChange.emit({
      ...(value.search ? { search: value.search } : null),
      ...(value.page && value.page !== '1' ? { page: value.page } : null),
    });
  }

  protected get pages(): number {
    return Math.ceil(this.data.count / 10);
  }

  protected get pagesArray(): { label: string; url: URL | null }[] {
    const pagesArray = [];

    for (let i = 1; i <= this.pages; i++) {
      pagesArray.push({
        label: i.toString(),
        url: i === 1 ? null : new URL(`?page=${i}`, window.location.href),
      });
    }

    return pagesArray;
  }

  protected doSearchDataChange(): void {
    this.emitSearchData();
  }

  protected clearSearchInput(): void {
    this.formGroup.controls.search.setValue('');
    this.emitSearchData();
  }

  protected doPageChange(url: URL | null): void {
    if (url === null) {
      return;
    }
    this.formGroup.controls.page.setValue(url.searchParams.get('page') ?? '');
    this.emitSearchData();
  }
}
