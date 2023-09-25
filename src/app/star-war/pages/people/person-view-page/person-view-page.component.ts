import { switchMap } from 'rxjs';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonViewComponent } from 'src/app/star-war/people/person-view/person-view.component';
import { PeopleService } from 'src/app/star-war/services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-view-page',
  standalone: true,
  imports: [CommonModule, PersonViewComponent],
  templateUrl: './person-view-page.component.html',
  styleUrls: ['./person-view-page.component.scss']
})
export class PersonViewPageComponent {
  private readonly peopleService = inject(PeopleService);
  private readonly route = inject(ActivatedRoute);

  protected readonly data$ = this.route.params.pipe(
    switchMap((params) => this.peopleService.get(params['id']))
  )
}
