import { createTestEnvironment } from '@vendure/testing';
import { testConfig } from './test-config';
import { VendureInternalPlugin } from '../../src/plugin';

export const createVendureTestEnvironment = (extraOptions = {}) => {
  const config = {
    ...testConfig,
    plugins: [VendureInternalPlugin],
    ...extraOptions,
  };
  const results = createTestEnvironment(config);

  return results;
};
