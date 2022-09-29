import gql from 'graphql-tag';

const CurrentUserFragment = gql`
  fragment CurrentUser on CurrentUser {
    id
    identifier
  }
`;

export const ME = gql`
  ${CurrentUserFragment}

  query me {
    me {
      ...CurrentUser
    }
  }
`;

export const LOGIN = gql`
  ${CurrentUserFragment}

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
