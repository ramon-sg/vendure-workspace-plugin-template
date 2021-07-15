import {
  DefaultJobQueuePlugin,
  DefaultSearchPlugin,
  VendureConfig,
} from '@vendure/core';
import { AssetServerPlugin } from '@vendure/asset-server-plugin';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import path from 'path';
import { VendureInternalPlugin } from '../../index';

export const headlessConfig: VendureConfig = {
  apiOptions: {
    port: 3000,
    adminApiPath: 'admin-api',
    adminApiPlayground: {
      settings: {
        'request.credentials': 'include',
      } as any,
    }, // turn this off for production
    adminApiDebug: true, // turn this off for production
    shopApiPath: 'shop-api',
    shopApiPlayground: {
      settings: {
        'request.credentials': 'include',
      } as any,
    }, // turn this off for production
    shopApiDebug: true, // turn this off for production
  },
  authOptions: {
    // sessionSecret: "v5evpqy0rn",
    superadminCredentials: {
      identifier: 'superadmin',
      password: 'superadmin',
    },
    tokenMethod: 'cookie',
  },
  dbConnectionOptions: {
    type: 'postgres',
    synchronize: false, // turn this off for production
    logging: false,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOSTNAME,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    migrations: [path.join(__dirname, '../migrations/*.ts')],
  },
  paymentOptions: {
    paymentMethodHandlers: [],
  },
  customFields: {},
  plugins: [
    AssetServerPlugin.init({
      route: 'assets',
      assetUploadDir: path.join(__dirname, './static/assets'),
    }),
    DefaultJobQueuePlugin,
    DefaultSearchPlugin,
    VendureInternalPlugin,
  ],
};

export const config: VendureConfig = {
  ...headlessConfig,
  plugins: [
    ...(headlessConfig.plugins || []),
    AdminUiPlugin.init({
      route: 'admin',
      port: 3002,
    }),
  ],
};
