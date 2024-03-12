import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Game } from '../../core/models/game';
import { Input } from 'postcss';
import { GameCardComponent } from '../game-card/game-card.component';
@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [GameCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  @Input({ required: true}) game: Game[] = [];

}
