export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    this.validateName();
    this.validateType();
  }

  validateType() {
    const legacyType = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    if (!legacyType.includes(this.type)) {
      throw new Error('Invalid type');
    }
  }

  validateName() {
    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('Invalid name');
    }
  }
}
