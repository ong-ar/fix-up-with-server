export const typeDefs = ["type User {\n  id: String!\n  email: String!\n}\n\ntype Mutation {\n  createProfile(id: String!, password: String!): Boolean!\n}\n\ntype Query {\n  myProfile: User!\n}\n"];
/* tslint:disable */

export interface Query {
  myProfile: User;
}

export interface User {
  id: string;
  email: string;
}

export interface Mutation {
  createProfile: boolean;
}

export interface CreateProfileMutationArgs {
  id: string;
  password: string;
}
