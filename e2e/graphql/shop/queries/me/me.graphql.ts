import gql from 'graphql-tag';

import { currentUserFragmentGraphql } from '../../fragments';

export const meGraphql = gql`
  ${currentUserFragmentGraphql}
  query me {
    me {
      ...CurrentUser
    }
  }
`;
