export const typeDefs = ["type User {\n  id: String!\n  email: String!\n}\n\ntype Mutation {\n  invite(email: String!): Boolean!\n  signIn(email: String!, password: String!): String!\n  signUp(id: String!, password: String!): Boolean!\n}\n\ntype Query {\n  myProfile: User!\n}\n"];
/* tslint:disable */

export interface Query {
  myProfile: User;
}

export interface User {
  id: string;
  email: string;
}

export interface Mutation {
  invite: boolean;
  signIn: string;
  signUp: boolean;
}

export interface InviteMutationArgs {
  email: string;
}

export interface SignInMutationArgs {
  email: string;
  password: string;
}

export interface SignUpMutationArgs {
  id: string;
  password: string;
}
