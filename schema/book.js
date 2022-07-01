import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import { books } from "../data.js";

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "book schema",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: new GraphQLNonNull(GraphQLInt) },
  }),
});

const booksQuery = new GraphQLObjectType({
  name: "Book_Query_Type",
  description: "Query schema for books",
  fields: () => ({
    books: {
      type: new GraphQLList(BookType),
      resolve: () => books,
    },
    book: {
      type: BookType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => {
        return books.find((book) => book.id === args.id);
      },
    },
  }),
});

export default new GraphQLSchema({
  query: booksQuery,
});
