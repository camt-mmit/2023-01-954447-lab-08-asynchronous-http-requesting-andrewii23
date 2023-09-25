import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SpeciesService } from 'src/app/star-war/services/species.service';
import { SpecieViewComponent } from 'src/app/star-war/species/specie-view/specie-view.component';

@Component({
  selector: 'app-specie-view-page',
  standalone: true,
  imports: [CommonModule, SpecieViewComponent],
  templateUrl: './specie-view-page.component.html',
  styleUrls: ['./specie-view-page.component.scss']
})
export class SpecieViewPageComponent {
  private readonly speciesService = inject(SpeciesService);
  private readonly route = inject(ActivatedRoute);

  protected readonly data$ = this.route.params.pipe(
    switchMap((params) => this.speciesService.get(params['id']))
  )
}
