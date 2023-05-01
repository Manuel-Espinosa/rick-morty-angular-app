import { Component, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Character } from './models/character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rick & Morty';
  http = inject(HttpClient);

  characters : Character[] = [];

  url_api = "https://rickandmortyapi.com/api/character";

  ngOnInit(){
    alert("Bienvenido!");
  }

  loadCharacters() {
    this.http.get<{ results: Character[] }>(this.url_api).subscribe((data) => {
      this.characters = data.results;
    });
  }
  

}