import { Injectable } from '@angular/core';
import { List, Specie } from '../model';
import { parseSpeciesList } from '../helpers';

const url = 'https://swapi.dev/api/species' as const;

@Injectable({
  providedIn: 'root',
})
export class SpeciesFetchService {
  async getAll(): Promise<List<Specie>> {
    return parseSpeciesList(await (await fetch(url)).json());
  }
}
