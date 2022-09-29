import gql from 'graphql-tag';

export const customerFragmentGraphql = gql`
  fragment Customer on Customer {
    id
    emailAddress
    user {
      id
      identifier
    }
  }
`;
