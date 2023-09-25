import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsService } from 'src/app/star-war/services/planets.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PlanetViewComponent } from 'src/app/star-war/planets/planet-view/planet-view.component';

@Component({
  selector: 'app-planet-view-page',
  standalone: true,
  imports: [CommonModule, PlanetViewComponent],
  templateUrl: './planet-view-page.component.html',
  styleUrls: ['./planet-view-page.component.scss']
})
export class PlanetViewPageComponent {
  private readonly planetsService = inject(PlanetsService);
  private readonly route = inject(ActivatedRoute);

  protected readonly data$ = this.route.params.pipe(
    switchMap((params) => this.planetsService.get(params['id']))
  )
}
