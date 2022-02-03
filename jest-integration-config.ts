import config from './jest.config'
Object.defineProperty(config, 'testMatch', { value: ['**/*.test.ts'] })
module.exports = config
