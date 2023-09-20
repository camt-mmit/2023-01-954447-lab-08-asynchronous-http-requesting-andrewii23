import { Injectable } from '@angular/core';
import { List, Planet } from '../model';
import { parsePlanetsList } from '../helpers';

const url = 'https://swapi.dev/api/planets' as const;

@Injectable({
  providedIn: 'root',
})
export class PlanetsFetchService {
  async getAll(): Promise<List<Planet>> {
    const response = await fetch(url);
    const data = await response.json();
    return parsePlanetsList(data);
  }
}
