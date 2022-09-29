import gql from 'graphql-tag';

import { currentUserFragmentGraphql } from '../../fragments';

export const loginGraphql = gql`
  ${currentUserFragmentGraphql}
  mutation login($username: String!, $password: String!, $rememberMe: Boolean) {
    login(username: $username, password: $password, rememberMe: $rememberMe) {
      ... on CurrentUser {
        ...CurrentUser
      }

      ... on InvalidCredentialsError {
        errorCode
        message
        authenticationError
      }

      ... on NotVerifiedError {
        errorCode
        message
      }

      ... on NativeAuthStrategyError {
        errorCode
        message
      }

      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
