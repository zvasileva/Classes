import Daemon from '../Daemon';

test.each([
  ['Ivan', 'Daemon', {
    name: 'Ivan', type: 'Daemon', health: 100, attack: 10, defence: 40,
  }],
])('get result', (name, type, expected) => {
  const result = new Daemon(name, type);
  expect(result).toEqual(expected);
});
