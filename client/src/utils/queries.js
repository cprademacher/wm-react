import { gql } from "@apollo/client";

export const QUERY_MOUNTAINS = gql`
  query getMountains {
    mountains {
      _id
      name
      imageUrl
      description
      lat
      long
      pass
    }
  }
`;

export const QUERY_SINGLE_MOUNTAIN = gql`
  query Query($id: ID) {
    mountain(_id: $id) {
      _id
      name
      imageUrl
      description
      lat
      long
      pass
    }
  }
`;
