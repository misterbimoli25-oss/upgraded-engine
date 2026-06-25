// Input validator
class Validator {
  static isString(val) { return typeof val === 'string'; }
  static isNumber(val) { return typeof val === 'number' && !isNaN(val); }
  static isObject(val) { return val !== null && typeof val === 'object'; }
  static isArray(val) { return Array.isArray(val); }
  
  static validateConfig(config) {
    const errors = [];
    if (!config.name) errors.push('name is required');
    if (!config.version) errors.push('version is required');
    return { valid: errors.length === 0, errors };
  }
}

module.exports = Validator;
