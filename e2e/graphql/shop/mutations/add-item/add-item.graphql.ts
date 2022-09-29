import gql from 'graphql-tag';
import { orderFragmentGraphql } from '../../fragments';

export const addItemGraphql = gql`
  ${orderFragmentGraphql}

  mutation addItem($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ... on Order {
        ...Order
      }

      ... on OrderModificationError {
        errorCode
        message
      }

      ... on OrderLimitError {
        errorCode
        message
        maxItems
      }

      ... on NegativeQuantityError {
        errorCode
        message
      }

      ... on InsufficientStockError {
        errorCode
        message
        quantityAvailable
      }

      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
