// Core engine module
class UpgradeEngine {
  constructor(config = {}) {
    this.version = config.version || '1.0.0';
    this.modules = new Map();
    this.state = 'idle';
  }

  registerModule(name, module) {
    this.modules.set(name, module);
    console.log(`Module registered: ${name}`);
  }

  async start() {
    this.state = 'starting';
    for (const [name, mod] of this.modules) {
      await mod.init();
    }
    this.state = 'running';
    return { status: 'ok', version: this.version };
  }

  async stop() {
    this.state = 'stopping';
    for (const [name, mod] of this.modules) {
      await mod.shutdown();
    }
    this.state = 'stopped';
  }
}

module.exports = UpgradeEngine;
