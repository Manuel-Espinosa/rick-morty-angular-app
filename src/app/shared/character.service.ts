import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from 'src/app/models/character.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // This registers the service at the root level
})
export class CharacterService {
  title = 'Personajes de Rick & Morty';

  characters: Character[] = [];

  url_api = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  loadCharacters(): Observable<Character[]> {
    return this.http.get<{ results: Character[] }>(this.url_api).pipe(
      map((response) => response.results)
    );
  }
}
