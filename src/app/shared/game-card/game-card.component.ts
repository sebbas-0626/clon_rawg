import { Component, Input } from '@angular/core';
import { Game } from '../../core/models/game';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {
 @Input({ required: true}) game: Game;
}
