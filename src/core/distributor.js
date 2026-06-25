// Task distributor for parallel processing
class Distributor {
  constructor(workers = 4) {
    this.workers = workers;
    this.queue = [];
    this.results = [];
  }

  async distribute(tasks) {
    this.queue = [...tasks];
    const batch = [];
    while (this.queue.length > 0) {
      const chunk = this.queue.splice(0, this.workers);
      const results = await Promise.all(chunk.map(t => t.run()));
      this.results.push(...results);
    }
    return this.results;
  }
}

module.exports = Distributor;
