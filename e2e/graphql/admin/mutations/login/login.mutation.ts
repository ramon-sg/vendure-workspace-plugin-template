import { SimpleGraphQLClient } from '@vendure/testing';

import {
  LoginMutation,
  LoginMutationVariables,
} from '../../admin-generated-types';

import { loginGraphql } from './login.graphql';
import { parseResult } from '../../../helpers';

type Payload = {
  username: string;
  password: string;
  rememberMe: boolean;
};

export const loginMutation = async (
  adminClient: SimpleGraphQLClient,
  { password, rememberMe, username }: Payload,
) => {
  const data = await adminClient.query<LoginMutation, LoginMutationVariables>(
    loginGraphql,
    { username, password, rememberMe },
  );

  return parseResult(data.login);
};
