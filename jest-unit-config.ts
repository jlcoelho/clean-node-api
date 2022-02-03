import config from './jest.config'
Object.defineProperty(config, 'testMatch', { value: ['**/*.spec.ts'] })
module.exports = config
