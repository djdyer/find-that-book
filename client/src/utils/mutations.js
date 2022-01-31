import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $username: String!, $password: String!) {
    loginUser(email: $email, username: $username, password: $password) {
      token
      user {
        _id
        email
        username
        password
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: String!) {
    saveBook(bookTitle: $bookTitle) {
      _id
      username
      email
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

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
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
