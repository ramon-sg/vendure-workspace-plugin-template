import gql from 'graphql-tag';
import { currentUserFragmentGraphql } from '../../fragments/current-user.fragment.graphql';

export const meGraphql = gql`
  ${currentUserFragmentGraphql}
  query me {
    me {
      ...CurrentUser
    }
  }
`;
