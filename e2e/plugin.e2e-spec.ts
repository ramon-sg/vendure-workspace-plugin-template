import path from 'path';
import { MutationLoginArgs } from './graphql/types/generated-shop-types';
import { TEST_SETUP_TIMEOUT_MS } from './support/test-config';
import { LOGIN } from './graphql/mutations/login.mutation';
import { registerInitializer, SqljsInitializer } from '@vendure/testing';

import {
  createTestEnvironment,
  startEnvironment,
  stopEnvironment,
} from './support/helper';

registerInitializer(
  'sqljs',
  new SqljsInitializer(path.join(__dirname, '__data__')),
);

describe('Plugin (e2e)', () => {
  const {
    server,
    adminClient,
    shopClient,
    // mockApiServer
  } = createTestEnvironment();

  beforeAll(async () => {
    await startEnvironment({
      server,
      adminClient,
      // mockApiServer
    });
  }, TEST_SETUP_TIMEOUT_MS);

  afterAll(async () => {
    await stopEnvironment({
      server,
      // mockApiServer
    });
  });

  describe('shop api', () => {
    test('should log in', async () => {
      const { login: result } = await shopClient.query<any, MutationLoginArgs>(
        LOGIN,
        {
          username: 'superadmin',
          password: 'superadmin',
          rememberMe: true,
        },
      );

      expect(result.identifier).toEqual('superadmin');
    });
  });
});
