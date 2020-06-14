import Magician from '../Magician';

test.each([
  ['Ivan', 'Magician', {
    name: 'Ivan', type: 'Magician', health: 100, attack: 10, defence: 40,
  }],
])('get result', (name, type, expected) => {
  const result = new Magician(name, type);
  expect(result).toEqual(expected);
});
