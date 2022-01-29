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
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(name: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

// bookCount(username: String): [Book]
// savedBooks(bookId: ID!): Book
// addUser(username: String!, email: String!, password: String!): Auth
// saveBook([{authors}], description, title, bookId, image, link): User
