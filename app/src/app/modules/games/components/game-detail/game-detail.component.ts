import { Component, Input } from '@angular/core';
import { AgeEnum, AgeMapping, Age, TimeEnum, TimeMapping, Time, Game} from './../../interfaces/games.interface';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent {
  @Input() game: Game;
  constructor() { }

  getAge(ageEnum: AgeEnum): string {
    return AgeMapping.find((age: Age) => age.enum === ageEnum).description
  }  
  
  getTime(timeEnum: TimeEnum): string {
    return TimeMapping.find((time: Time) => time.enum === timeEnum).description
  }

}
