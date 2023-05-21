import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/shared/character.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards: any[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    this.characterService.loadCharacters().subscribe((characters: Character[]) => {
      this.cards = characters.map((character: Character) => ({
        title: character.name,
        cols: 1,
        rows: 1,
        character: character
      }));
    });
  }

  getCardImage(card: any): string {
    return card.character && card.character.image;
  }
}
