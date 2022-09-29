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
  addItemMutation,
} from './graphql/shop';

import {
  createCustomerMutation,
  loginMutation as loginAdminMutation,
  meQuery as meAdminQuery,
} from './graphql/admin';

registerInitializer(
  'sqljs',
  new SqljsInitializer(path.join(__dirname, '__data__')),
);

const adminUsername = 'superadmin';
const adminPassword = 'superadmin';

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

  describe('admin api', () => {
    describe('login', () => {
      test('should log in', async () => {
        const [currentUser, err] = await loginAdminMutation(shopClient, {
          username: adminUsername,
          password: adminPassword,
          rememberMe: true,
        });

        expect(err).toBeNull();
        expect(currentUser?.identifier).toEqual(adminUsername);

        const me = await meAdminQuery(shopClient);

        expect(me?.identifier).toEqual(adminUsername);
      });
    });

    describe('create customer', () => {
      test('should create a new customer', async () => {
        const email = 'user-one@mail.com';
        const password = '00000000';

        const [customer, err] = await createCustomerMutation(adminClient, {
          email,
          password,
        });

        expect(err).toBeNull();

        expect(customer?.emailAddress).toEqual(email);
      });
    });
  });

  describe('shop api', () => {
    describe('login', () => {
      test('should log in', async () => {
        const [currentUser, err] = await loginShopMutation(shopClient, {
          username: adminUsername,
          password: adminPassword,
          rememberMe: true,
        });

        expect(err).toBeNull();
        expect(currentUser?.identifier).toEqual(adminUsername);

        const me = await meShopQuery(shopClient);

        expect(me?.identifier).toEqual(adminUsername);
      });
    });

    describe('add Item', () => {
      test('should add an item to the cart', async () => {
        const productVariantId = 'T_1';
        const [data, err] = await addItemMutation(shopClient, {
          productVariantId,
          quantity: 3,
        });

        expect(err).toBeNull();
        expect(data?.lines[0]?.productVariant.id).toEqual(productVariantId);
      });
    });
  });
});
