export interface Game {
  _id?: number;
  title: string;
  description: string;
  age: AgeEnum;
  duration: TimeEnum;
  preparationTime: TimeEnum;
  minNumberOfPlayers: number;
  material: Material[];
  author?: string;
}

export enum TimeEnum {
  LESS_THAN_HALFOUR,
  HALFOUR_TO_HOUR,
  HOUR_TO_TWO_HOURS,
  MORE_THAN_TWO_HOURS,
}

export interface Time {
  description: string;
  enum: TimeEnum;
}

export const TimeMapping: Time[] = [
  {
    description: '0 - 30 minuten',
    enum: TimeEnum.LESS_THAN_HALFOUR,
  },{
    description: '30 - 60 minuten',
    enum: TimeEnum.HALFOUR_TO_HOUR,
  },{
    description: '60 - 120 minuten',
    enum: TimeEnum.HOUR_TO_TWO_HOURS,
  },{
    description: '> 120 minuten',
    enum: TimeEnum.MORE_THAN_TWO_HOURS,
  }
];

export enum AgeEnum {
  ALL,
  TWO_TO_FIVE,
  FIVE_TO_SEVEN,
  SEVEN_TO_ELEVEN,
  ELEVEN_TO_FIFTEEN,
  FIFTEEN_TO_EIGHTEEN,
  ABOVE_EIGHTEEN
}

export interface Age {
  description: string;
  enum: AgeEnum;
}

export const AgeMapping: Age[] = [
  {
    description: 'Alle leeftijden',
    enum: AgeEnum.ALL
  },{
    description: '0 - 5 jaar',
    enum: AgeEnum.TWO_TO_FIVE
  },{
    description: '5 - 7 jaar',
    enum: AgeEnum.FIVE_TO_SEVEN
  },{
    description: '7 - 11 jaar',
    enum: AgeEnum.SEVEN_TO_ELEVEN
  },{
    description: '11 - 15 jaar',
    enum: AgeEnum.ELEVEN_TO_FIFTEEN
  },{
    description: '15 - 18 jaar',
    enum: AgeEnum.FIFTEEN_TO_EIGHTEEN
  },{
    description: 'Ouder dan 18',
    enum: AgeEnum.ABOVE_EIGHTEEN
  }
];

export interface Material {
  description: string;
}
