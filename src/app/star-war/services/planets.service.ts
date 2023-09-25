import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { List, Planet, RawList, RawPlanet, SearchData } from './../model';
import { parsePlanet, parsePlanetsList } from '../helpers';

const url = 'https://swapi.dev/api/planets' as const;

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor(private readonly http: HttpClient) {}

  getAll(params?: SearchData): Observable<List<Planet>> {
    return this.http
      .get<RawList<RawPlanet>>(url, {
        params: params,
      })
      .pipe(map(parsePlanetsList));
  }

  get(id: string): Observable<Planet> {
    return (
      this.http.get<RawPlanet>(`${url}/${id}`).pipe(
        map(parsePlanet),
      )
    )
  }
}
