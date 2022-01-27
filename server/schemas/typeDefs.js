// * `typeDefs.js`: Define the necessary `Query` and `Mutation` types:

// * `Query` type:

//   * `me`: Which returns a `User` type.

// * `Mutation` type:

//   * `login`: Accepts an email and password as parameters; returns an `Auth` type.

//   * `addUser`: Accepts a username, email, and password as parameters; returns an `Auth` type.

//   * `saveBook`: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a `User` type. (Look into creating what's known as an `input` type to handle all of these parameters!)

//   * `removeBook`: Accepts a book's `bookId` as a parameter; returns a `User` type.

// * `User` type:
//   * `_id`
//   * `username`
//   * `email`
//   * `bookCount`
//   * `savedBooks` (This will be an array of the `Book` type.)

// * `Book` type:
//   * `bookId` (Not the `_id`, but the book's `id` value returned from Google's Book API.)
//   * `authors` (An array of strings, as there may be more than one author.)
//   * `description`
//   * `title`
//   * `image`
//   * `link`

// * `Auth` type:
//   * `token`
//   * `user` (References the `User` type.)

// ===========================

// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   type Tech {
//     _id: ID!
//     name: String!
//   }

//   type Matchup {
//     _id: ID!
//     tech1: String!
//     tech2: String!
//     tech1_votes: Int
//     tech2_votes: Int
//   }

//   type Query {
//     tech: [Tech]
//     matchups(_id: String): [Matchup]
//   }

//   type Mutation {
//     createMatchup(tech1: String!, tech2: String!): Matchup
//     createVote(_id: String!, techNum: Int!): Matchup
//   }
// `;

// module.exports = typeDefs;
