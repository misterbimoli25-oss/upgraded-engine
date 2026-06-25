// Logger utility
const LOG_LEVELS = { DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3 };

class Logger {
  constructor(level = 'INFO') {
    this.level = LOG_LEVELS[level] || 1;
  }

  info(msg) { this._log('INFO', msg); }
  warn(msg) { this._log('WARN', msg); }
  error(msg) { this._log('ERROR', msg); }
  debug(msg) { this._log('DEBUG', msg); }

  _log(level, msg) {
    if (LOG_LEVELS[level] >= this.level) {
      console.log(`[${level}] ${new Date().toISOString()}: ${msg}`);
    }
  }
}

module.exports = Logger;
