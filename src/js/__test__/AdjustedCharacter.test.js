import Magician from '../Magician';

describe('testing adjusted attack', () => {
  test('testing adjusted attack with stoned = true', () => {
    const magic = new Magician('Fedia', 2);

    expect(magic.attack).toEqual(85);
  });

  test('testing adjusted attack with stoned = false', () => {
    const magic = new Magician('Fedia', 2);
    magic.stoned = false;

    expect(magic.attack).toEqual(90);
  });

  test('testing method get stoned of class AdjustedCharacter', () => {
    const magic = new Magician('Fedia', 2);

    expect(magic.stoned).toEqual(true);
  });
});
