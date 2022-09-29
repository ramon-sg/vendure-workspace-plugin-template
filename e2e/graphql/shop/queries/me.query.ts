import { SimpleGraphQLClient } from '@vendure/testing';
import { ME } from '../shop-definitions.graphql';
import { MeQuery, MeQueryVariables } from '../shop-generated-types';

export const meQuery = async (shopClient: SimpleGraphQLClient) => {
  const data = await shopClient.query<MeQuery, MeQueryVariables>(ME);

  return data.me;
};
