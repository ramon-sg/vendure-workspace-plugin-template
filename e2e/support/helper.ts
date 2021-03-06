import {
  createTestEnvironment as createTestEnvironmentNative,
  SimpleGraphQLClient,
  TestServer,
} from '@vendure/testing';

import { initialData } from './initial-data';
import path from 'path';

import { ID, mergeConfig, VendureConfig } from '@vendure/core';
import { defaultConfig } from './default-config';
// import { MockApiServer } from './stub-api-server';

export const createTestEnvironment = (
  extraOptions: Partial<VendureConfig> = {},
) => {
  const config: Required<VendureConfig> = mergeConfig(
    defaultConfig,
    extraOptions,
  );

  const { server, adminClient, shopClient } =
    createTestEnvironmentNative(config);

  // const mockApiServer = new MockApiServer();

  return {
    server,
    adminClient,
    shopClient,
    // mockApiServer
  };
};

type startEnvironmentOptions = {
  server: TestServer;
  // mockApiServer: MockApiServer;
  adminClient: SimpleGraphQLClient;
};

export const startEnvironment = async ({
  server,
  adminClient,
}: // mockApiServer,
Partial<startEnvironmentOptions>) => {
  // if (mockApiServer) mockApiServer.start();

  if (server) {
    await server.init({
      initialData,
      productsCsvPath: path.join(__dirname, 'products.csv'),
      customerCount: 1,
      logging: true,
    });

    if (adminClient) await adminClient.asSuperAdmin();
  }
};

type StopEnvironmentOptionsOptions = {
  server: TestServer;
  // mockApiServer: MockApiServer;
};

export const stopEnvironment = async ({
  server,
}: // mockApiServer,
Partial<StopEnvironmentOptionsOptions>) => {
  // if (mockApiServer) mockApiServer.stop();
  if (server) await server.destroy();
};

export const decodeId = (id: ID): number => {
  if (Number.isInteger(id)) return id as number;

  return defaultConfig.entityIdStrategy.decodeId(id as string);
};

export const encodeId = (id: number): string => {
  return defaultConfig.entityIdStrategy.encodeId(id);
};
