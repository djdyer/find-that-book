// * `queries.js`: This will hold the query `GET_ME`, which will execute the `me` query set up using Apollo Server.

// ====================================

import { gql } from "@apollo/client";

export const QUERY_GET_ME = gql`
  query user {
    user {
      _id
      username
      email
      password
      savedBooks
    }
  }
`;
