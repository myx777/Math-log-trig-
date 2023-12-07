import AdjustedCharacter from './AdjustedCharacter';

export default class Magician extends AdjustedCharacter {
  constructor(name, distance) {
    super(name, 'Magician', distance);
    this.stoned = true;
    this.baseAttack = 100;
    this.defence = 40;
  }
}
