import { gql } from "@apollo/client";

export const QUERY_GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      password
      bookCount
      savedBooks {
        title
        authors
        description
        bookId
        image
        link
      }
    }
  }
`;
