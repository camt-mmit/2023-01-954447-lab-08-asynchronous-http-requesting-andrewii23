import { Routes } from '@angular/router';
import { StarWarPageComponent } from './pages/star-war-page/star-war-page.component';
import { PeopleListPageComponent } from './pages/people/people-list-page/people-list-page.component';
import { SpeciesListPageComponent } from './pages/species/species-list-page/species-list-page.component';
import { PlanetsListPageComponent } from './pages/planets/planets-list-page/planets-list-page.component';
import { PeopleViewComponent } from './people/people-view/people-view.component';
import { SpeciesViewComponent } from './species/species-view/species-view.component';
import { PlanetsViewComponent } from './planets/planets-view/planets-view.component';

export const routes: Routes = [
  {
    path: '',
    component: StarWarPageComponent,
    children: [
      { path: '', redirectTo: 'people', pathMatch: 'full' },
      { path: 'people', component: PeopleListPageComponent },
      { path: 'people/:id', component: PeopleViewComponent }, // People details view
      { path: 'species', component: SpeciesListPageComponent },
      { path: 'species/:id', component: SpeciesViewComponent }, // Species details view
      { path: 'planets', component: PlanetsListPageComponent },
      { path: 'planets/:id', component: PlanetsViewComponent }, // Planets details view
    ],
  },
];
