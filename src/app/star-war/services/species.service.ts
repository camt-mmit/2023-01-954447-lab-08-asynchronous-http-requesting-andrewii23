import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { List, RawList, RawSpecie, SearchData, Specie } from './../model';
import { parseSpeciesList } from '../helpers';

const url = 'https://swapi.dev/api/species' as const;

@Injectable({
  providedIn: 'root',
})
export class SpeciesService {
  private readonly http = inject(HttpClient);

  getAll(params?: SearchData): Observable<List<Specie>> {
    return this.http
      .get<RawList<RawSpecie>>(url, {
        params: params,
      })
      .pipe(map(parseSpeciesList));
  }
}
