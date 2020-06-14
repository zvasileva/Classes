import Swordsman from '../Swordsman';

test.each([
  ['Ivan', 'Swordsman', {
    name: 'Ivan', type: 'Swordsman', health: 100, attack: 40, defence: 10,
  }],
])('get result', (name, type, expected) => {
  const result = new Swordsman(name, type);
  expect(result).toEqual(expected);
});
