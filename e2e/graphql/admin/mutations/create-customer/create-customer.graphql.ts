import gql from 'graphql-tag';
import { customerFragmentGraphql } from '../../fragments/customer.fragment.graphql';

export const createCustomerGraphql = gql`
  ${customerFragmentGraphql}

  mutation createCustomer($input: CreateCustomerInput!, $password: String!) {
    createCustomer(input: $input, password: $password) {
      ... on Customer {
        ...Customer
      }

      ... on EmailAddressConflictError {
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
