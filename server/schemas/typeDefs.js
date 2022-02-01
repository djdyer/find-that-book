const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: String
    savedBooks: [Book]
  }

  type Book {
    title: String
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(name: String!): User
  }

  input inputBook {
    title: String
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: inputBook!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
