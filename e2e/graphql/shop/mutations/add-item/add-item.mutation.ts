import { ID } from '@vendure/core';
import { SimpleGraphQLClient } from '@vendure/testing';
import { parseResult } from '../../../helpers';

import {
  AddItemMutation,
  AddItemMutationVariables,
  OrderFragment,
} from '../../shop-generated-types';
import { addItemGraphql } from './add-item.graphql';

type Payload = {
  productVariantId: ID;
  quantity: number;
};

export const addItemMutation = async (
  shopClient: SimpleGraphQLClient,
  { productVariantId, quantity }: Payload,
) => {
  const res = await shopClient.query<AddItemMutation, AddItemMutationVariables>(
    addItemGraphql,
    {
      productVariantId: productVariantId as string,
      quantity,
    },
  );

  return parseResult<OrderFragment>(res.addItemToOrder);
};
