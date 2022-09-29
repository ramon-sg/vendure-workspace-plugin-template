import gql from 'graphql-tag';

export const currentUserFragmentGraphql = gql`
  fragment CurrentUser on CurrentUser {
    id
    identifier
  }
`;
