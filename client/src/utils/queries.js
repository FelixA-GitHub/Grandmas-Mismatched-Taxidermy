import { gql } from '@apollo/client';

export const QUERY_ITEM = gql`
  query getItems {
    item {
      _id
      name
      description
      price
      image
      created
    }
  }
`;

export const QUERY_ALL_ITEMS = gql`
  {
    items {
      _id
      name
      description
      price
      image
      created
    }
  }
`;


export const QUERY_USER = gql`
  {
    user {
      username
    }
  }
`;



