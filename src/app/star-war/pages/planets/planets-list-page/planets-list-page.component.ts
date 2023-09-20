import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsListComponent } from 'src/app/star-war/planets/planets-list/planets-list.component';
import { PlanetsService } from 'src/app/star-war/services/planets.service';
import { SearchData } from 'src/app/star-war/model';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-planets-list-page',
  standalone: true,
  imports: [CommonModule, PlanetsListComponent],
  templateUrl: './planets-list-page.component.html',
  styleUrls: ['./planets-list-page.component.scss'],
})
export class PlanetsListPageComponent {
  private readonly planetsService = inject(PlanetsService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly data$ = this.route.queryParams.pipe(
    switchMap((params) =>
      this.planetsService.getAll(params).pipe(
        map((data) => ({
          params,
          data,
        })),
      ),
    ),
  );

  protected doSearchDataChange(searchData: SearchData): void {
    this.router.navigate([], {
      replaceUrl: true,
      queryParams: searchData,
    });
  }
}
