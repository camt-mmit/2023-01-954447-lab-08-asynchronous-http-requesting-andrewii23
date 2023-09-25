import { GoogleRequireTokenPageComponent } from './pages/google-require-token-page/google-require-token-page.component';
import {  Routes } from "@angular/router";
import { GooglePageComponent } from "./pages/google-page/google-page.component";

export const routes: Routes = [
  {
    path: '',
    component: GooglePageComponent,
    children: [
      { path: '', redirectTo: 'google', pathMatch: 'full' },
      { path: 'google', component: GoogleRequireTokenPageComponent },

    ],
  },
];
