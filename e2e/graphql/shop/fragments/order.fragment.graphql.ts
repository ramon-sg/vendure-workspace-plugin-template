import gql from 'graphql-tag';

export const orderFragmentGraphql = gql`
  fragment Order on Order {
    id
    totalWithTax

    lines {
      id
      quantity
      productVariant {
        id
        name
      }
    }
  }
`;
