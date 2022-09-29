import { SimpleGraphQLClient } from '@vendure/testing';
import { ME } from '../admin-definitions.graphql';
import { MeQuery, MeQueryVariables } from '../admin-generated-types';

export const meQuery = async (adminClient: SimpleGraphQLClient) => {
  const data = await adminClient.query<MeQuery, MeQueryVariables>(ME);

  return data.me;
};
