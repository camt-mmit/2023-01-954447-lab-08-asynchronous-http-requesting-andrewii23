import { HttpClient } from '@angular/common/http';
import { List, Person, RawList, RawPerson, SearchData } from './../model';
import { Observable, map } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { parsePeopleList, parsePerson } from '../helpers';

const url = 'https://swapi.dev/api/people' as const;

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private readonly http = inject(HttpClient);

  getAll(params?: SearchData): Observable<List<Person>> {
    return this.http
      .get<RawList<RawPerson>>(url, {
        params: params,
      })
      .pipe(map(parsePeopleList));
  }

  get(id: string): Observable<Person> {
    return (
      this.http.get<RawPerson>(`${url}/${id}`).pipe(
        map(parsePerson),
      )
    )
  }
}
