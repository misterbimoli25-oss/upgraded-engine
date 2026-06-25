// Tests for distributor
const Distributor = require('../src/core/distributor');

describe('Distributor', () => {
  test('should distribute tasks across workers', async () => {
    const dist = new Distributor(2);
    const tasks = [
      { run: () => Promise.resolve(1) },
      { run: () => Promise.resolve(2) },
      { run: () => Promise.resolve(3) },
      { run: () => Promise.resolve(4) },
    ];
    const results = await dist.distribute(tasks);
    expect(results).toEqual([1, 2, 3, 4]);
  });
});
