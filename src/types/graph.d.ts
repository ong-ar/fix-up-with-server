export const typeDefs = ["type User {\n  id: String!\n  email: String!\n}\n\ntype Query {\n  myProfile: User!\n}\n\ntype Mutation {\n  signIn(email: String!, password: String!): String!\n  signUp(id: String!, password: String!): Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  myProfile: User;
}

export interface User {
  id: string;
  email: string;
}

export interface Mutation {
  signIn: string;
  signUp: boolean;
}

export interface SignInMutationArgs {
  email: string;
  password: string;
}

export interface SignUpMutationArgs {
  id: string;
  password: string;
}
