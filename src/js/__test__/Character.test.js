import Character from '../Character';

describe('check class Character', () => {
  test('Check character at mistakes in name and type', () => {
    const characterTest = new Character('Vasia', 'Bowman');
    expect(characterTest).toBe(characterTest);
  });

  test('Check character with invalid name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Invalid name');
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Invalid name');
  });

  test('Check character with invalid type', () => {
    expect(() => new Character('John', 'InvalidType')).toThrow('Invalid type');
  });
});
