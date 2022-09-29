import { SimpleGraphQLClient } from '@vendure/testing';

import {
  CurrentUserFragment,
  LoginMutation,
  LoginMutationVariables,
} from '../../shop-generated-types';

import { parseResult } from '../../../helpers';
import { loginGraphql } from './login.graphql';

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
    loginGraphql,
    { username, password, rememberMe },
  );

  return parseResult<CurrentUserFragment>(data.login);
};
