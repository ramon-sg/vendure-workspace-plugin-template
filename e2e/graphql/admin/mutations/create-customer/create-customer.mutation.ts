import { SimpleGraphQLClient } from '@vendure/testing';

import {
  CreateCustomerMutation,
  CreateCustomerMutationVariables,
  CustomerFragment,
} from '../../admin-generated-types';

import { createCustomerGraphql } from './create-customer.graphql';
import { parseResult } from '../../../helpers';

type Payload = {
  email: string;
  password: string;

  firstName?: string;
  lastName?: string;
};

export const createCustomerMutation = async (
  adminClient: SimpleGraphQLClient,
  { email, password, firstName = '', lastName = '' }: Payload,
) => {
  const data = await adminClient.query<
    CreateCustomerMutation,
    CreateCustomerMutationVariables
  >(createCustomerGraphql, {
    input: { emailAddress: email, firstName, lastName },
    password,
  });

  return parseResult<CustomerFragment>(data.createCustomer);
};
