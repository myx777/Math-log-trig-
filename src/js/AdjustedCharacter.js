import Character from './Character';

export default class AdjustedCharacter extends Character {
  constructor(name, type, distance, baseAttack, stoned) {
    super(name, type);
    this.distance = distance;
    this.stoned = stoned;
    this.baseAttack = baseAttack;
  }

  get attack() {
    const baseAttackStoned = this.calculateBaseAttack();
    return this.stoned ? this.calculateStonedAttack(baseAttackStoned) : baseAttackStoned;
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
