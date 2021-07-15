import { SimpleGraphQLClient, TestServer } from '@vendure/testing';
import path from 'path';
import { initialData } from './initial-data';

type StartServerOptions = {
  server: TestServer;
  adminClient: SimpleGraphQLClient;
};

export const startServer = async ({
  server,
  adminClient,
}: StartServerOptions) => {
  await server.init({
    initialData,
    productsCsvPath: path.join(__dirname, 'products.csv'),
    customerCount: 1,
    logging: true,
  });

  await adminClient.asSuperAdmin();
};

type StopServerOptionsOptions = {
  server: TestServer;
};

export const stopServer = async ({ server }: StopServerOptionsOptions) => {
  await server.destroy();
};
