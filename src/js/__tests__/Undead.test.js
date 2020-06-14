import Undead from '../Undead';

test.each([
  ['Ivan', 'Undead', {
    name: 'Ivan', type: 'Undead', health: 100, attack: 25, defence: 25,
  }],
])('get result', (name, type, expected) => {
  const result = new Undead(name, type);
  expect(result).toEqual(expected);
});
