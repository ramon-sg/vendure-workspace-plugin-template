import { VendureConfig } from '@vendure/core';
import { testConfig } from './test-config';
import { VendureInternalPlugin } from '../../src/plugin';

export const defaultConfig: Required<VendureConfig> = {
  ...testConfig,
  plugins: [VendureInternalPlugin],
};
