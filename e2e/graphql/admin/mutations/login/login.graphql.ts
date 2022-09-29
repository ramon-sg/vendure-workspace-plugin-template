import gql from 'graphql-tag';
import { currentUserFragmentGraphql } from '../../fragments/current-user.fragment.graphql';

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
