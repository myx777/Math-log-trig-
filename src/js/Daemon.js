import AdjustedCharacter from './AdjustedCharacter';

export default class Daemon extends AdjustedCharacter {
  constructor(name, distance) {
    super(name, 'Daemon', distance);
    this.baseAttack = 25;
    this.defence = 25;
  }
}
