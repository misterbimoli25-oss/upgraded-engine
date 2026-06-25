// Tests for engine module
const UpgradeEngine = require('../src/core/engine');

describe('UpgradeEngine', () => {
  let engine;

  beforeEach(() => {
    engine = new UpgradeEngine({ version: '1.0.0' });
  });

  test('should initialize with correct version', () => {
    expect(engine.version).toBe('1.0.0');
  });

  test('should register modules', () => {
    const mockModule = { init: jest.fn(), shutdown: jest.fn() };
    engine.registerModule('test', mockModule);
    expect(engine.modules.size).toBe(1);
  });

  test('should start and stop correctly', async () => {
    const mockModule = { init: jest.fn().mockResolvedValue(), shutdown: jest.fn().mockResolvedValue() };
    engine.registerModule('test', mockModule);
    
    const result = await engine.start();
    expect(result.status).toBe('ok');
    expect(engine.state).toBe('running');
    
    await engine.stop();
    expect(engine.state).toBe('stopped');
  });
});
