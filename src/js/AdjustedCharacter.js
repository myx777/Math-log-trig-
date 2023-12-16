import Character from './Character';
// #stoned;

export default class AdjustedCharacter extends Character {
  constructor(name, type, distance, baseAttack, stoned) {
    super(name, type);
    this.distance = distance;
    this._stoned = stoned;
    this.baseAttack = baseAttack;
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

  get attack() {
    const baseAttackStoned = this.calculateBaseAttack();
    return this._stoned ? this.calculateStonedAttack(baseAttackStoned) : baseAttackStoned;
  }

  calculateBaseAttack() {
    const distanceModifier = 1 - (this.distance - 1) * 0.1;
    return Math.max(0, Math.round(this.baseAttack * distanceModifier));
  }

  calculateStonedAttack(baseAttackStoned) {
    const distanceModifier = Math.log2(this.distance) * 5;
    return Math.max(0, Math.round(baseAttackStoned - distanceModifier));
  }
}