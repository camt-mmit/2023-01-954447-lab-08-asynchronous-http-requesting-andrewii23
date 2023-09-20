import { Routes } from '@angular/router';
import { StarWarPageComponent } from './pages/star-war-page/star-war-page.component';
import { PeopleListPageComponent } from './pages/people/people-list-page/people-list-page.component';
import { SpeciesListPageComponent } from './pages/species/species-list-page/species-list-page.component';
import { PlanetsListPageComponent } from './pages/planets/planets-list-page/planets-list-page.component';

export const routes: Routes = [
  {
    path: '',
    component: StarWarPageComponent,
    children: [
      { path: '', redirectTo: 'people', pathMatch: 'full' },
      { path: 'people', component: PeopleListPageComponent },
      { path: 'species', component: SpeciesListPageComponent },
      { path: 'planets', component: PlanetsListPageComponent },
    ],
  },
];
