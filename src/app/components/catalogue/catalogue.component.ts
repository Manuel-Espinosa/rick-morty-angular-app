import {
  Component,
  Directive,
  Injectable,
  OnInit,
  inject,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {
  title = 'Personajes de Rick & Morty';
  http = inject(HttpClient);

  characters: Character[] = [];

  url_api = 'https://rickandmortyapi.com/api/character';

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.http.get<{ results: Character[] }>(this.url_api).subscribe((data) => {
      this.characters = data.results;
    });
  }
}
