import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/shared/character.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  characters: Character[] = [];
  title = 'Personajes de Rick & Morty'; // Add the title property

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService.loadCharacters().subscribe((characters) => {
      this.characters = characters;
    });
  }
}
