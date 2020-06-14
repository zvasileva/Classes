import Bowerman from '../Bowerman';

test.each([
  ['Ivan', 'Bowerman', {
    name: 'Ivan', type: 'Bowerman', health: 100, attack: 25, defence: 25,
  }],
])('get result', (name, type, expected) => {
  const result = new Bowerman(name, type);
  expect(result).toEqual(expected);
});
