import { createTestEnvironment } from '@vendure/testing';
import { testConfig } from './test-config';
import { VendureInternalPlugin } from '../../src/plugin';

export const createVendureTestEnvironment = () => {
  const results = createTestEnvironment({
    ...testConfig,
    plugins: [VendureInternalPlugin],
  });

  return results;
};
