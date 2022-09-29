import { SimpleGraphQLClient } from '@vendure/testing';

import { MeQuery, MeQueryVariables } from '../../shop-generated-types';

import { meGraphql } from './me.graphql';

export const meQuery = async (shopClient: SimpleGraphQLClient) => {
  const data = await shopClient.query<MeQuery, MeQueryVariables>(meGraphql);

  return data.me;
};
