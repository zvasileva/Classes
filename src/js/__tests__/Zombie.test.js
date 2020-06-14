import Zombie from '../Zombie';

test.each([
  ['Ivan', 'Zombie', {
    name: 'Ivan', type: 'Zombie', health: 100, attack: 40, defence: 10,
  }],
])('get result', (name, type, expected) => {
  const result = new Zombie(name, type);
  expect(result).toEqual(expected);
});
