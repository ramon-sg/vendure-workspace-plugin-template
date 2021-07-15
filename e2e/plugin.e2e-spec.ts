import { MutationLoginArgs } from './graphql/types/generated-shop-types';
import { TEST_SETUP_TIMEOUT_MS } from './support/test-config';
import { LOGIN } from './graphql/mutations/login.mutation';
import { createVendureTestEnvironment } from './support/create-vendure-test-environment';
import { startServer, stopServer } from './support/server-helper';

describe('Plugin (e2e)', () => {
  const { server, adminClient, shopClient } = createVendureTestEnvironment();

  beforeAll(async () => {
    await startServer({ server, adminClient });
  }, TEST_SETUP_TIMEOUT_MS);

  afterAll(async () => {
    await stopServer({ server });
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
