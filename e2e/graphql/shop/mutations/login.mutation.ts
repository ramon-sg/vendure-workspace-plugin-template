import { SimpleGraphQLClient } from '@vendure/testing';

import {
  CurrentUserFragment,
  LoginMutation,
  LoginMutationVariables,
} from '../shop-generated-types';

import { LOGIN } from '../shop-definitions.graphql';
import { parseResult } from '../../helpers';

type Payload = {
  username: string;
  password: string;
  rememberMe: boolean;
};

export const loginMutation = async (
  shopClient: SimpleGraphQLClient,
  { password, rememberMe, username }: Payload,
) => {
  const data = await shopClient.query<LoginMutation, LoginMutationVariables>(
    LOGIN,
    { username, password, rememberMe },
  );

  return parseResult<CurrentUserFragment>(data.login);
};
