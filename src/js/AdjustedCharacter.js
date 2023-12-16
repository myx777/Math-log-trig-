import Character from './Character';
//#stoned;
//#baseAttack;

export default class AdjustedCharacter extends Character {
  constructor(name, type, distance, baseAttack, stoned) {
    super(name, type);
    this.distance = distance;
    this._stoned = stoned;
    this._baseAttack = baseAttack;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    if (typeof value !== 'boolean') {
      throw new Error('stoned must be a boolean');
    }
    this._stoned = value;
  }

  get baseAttack() {
    return this._baseAttack;
  }

  set baseAttack(value) {
    if (typeof value !== 'number') {
      throw new Error('baseAttack must be a number');
    }
    this._baseAttack = value;
  }

  get attack() {
    const baseAttackStoned = this.calculateBaseAttack();
    return this._stoned ? this.calculateStonedAttack(baseAttackStoned) : baseAttackStoned;
  }

  calculateBaseAttack() {
    const distanceModifier = 1 - (this.distance - 1) * 0.1;
    return Math.max(0, Math.round(this._baseAttack * distanceModifier));
  }

  calculateStonedAttack(baseAttackStoned) {
    const distanceModifier = Math.log2(this.distance) * 5;
    return Math.max(0, Math.round(baseAttackStoned - distanceModifier));
  }
}
