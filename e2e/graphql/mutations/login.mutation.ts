import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation ($username: String!, $password: String!, $rememberMe: Boolean) {
    login(username: $username, password: $password, rememberMe: $rememberMe) {
      ... on CurrentUser {
        identifier
      }
    }
  }
`;
