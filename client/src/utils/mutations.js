import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser() {
    loginUser() {
     _id
     email
     password
     savedBooks
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser() {
    addUser() {
     _id
     username
     email
     password
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook() {
    saveBook() {
     _id
     authors
     description
     bookId
     image
     link
     title
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook() {
    removeBook() {
      _id
    }
  }
`;
