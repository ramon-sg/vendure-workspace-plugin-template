import { registerInitializer, SqljsInitializer } from '@vendure/testing';
import path from 'path';

import { TEST_SETUP_TIMEOUT_MS } from './support/test-config';

import {
  createTestEnvironment,
  startEnvironment,
  stopEnvironment,
} from './support/helper';

import {
  loginMutation as loginShopMutation,
  meQuery as meShopQuery,
} from './graphql/shop';
import {
  loginMutation as loginAdminMutation,
  meQuery as meAdminQuery,
} from './graphql/admin';

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
      const username = 'superadmin';
      const password = 'superadmin';

      const [currentUser, err] = await loginShopMutation(shopClient, {
        username,
        password,
        rememberMe: true,
      });

      expect(err).toBeNull();
      expect(currentUser?.identifier).toEqual(username);

      const me = await meShopQuery(shopClient);

      expect(me?.identifier).toEqual(username);
    });
  });

  describe('admin api', () => {
    test('should log in', async () => {
      const username = 'superadmin';
      const password = 'superadmin';

      const [currentUser, err] = await loginAdminMutation(shopClient, {
        username,
        password,
        rememberMe: true,
      });

      expect(err).toBeNull();
      expect(currentUser?.identifier).toEqual(username);

      const me = await meAdminQuery(shopClient);

      expect(me?.identifier).toEqual(username);
    });
  });
});
