import { SimpleGraphQLClient } from '@vendure/testing';
import { meGraphql } from './me.graphql';
import { MeQuery, MeQueryVariables } from '../../admin-generated-types';

export const meQuery = async (adminClient: SimpleGraphQLClient) => {
  const data = await adminClient.query<MeQuery, MeQueryVariables>(meGraphql);

  return data.me;
};
