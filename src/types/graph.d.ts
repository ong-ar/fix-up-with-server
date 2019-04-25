export const typeDefs = ["type User {\n  id: String!\n  email: String!\n  password: String!\n}\n\ntype Invitation {\n  id: String!\n  invitedEmail: String!\n}\n\ntype SomeOne {\n  id: String!\n  matchMaker: User!\n  gender: String!\n  age: Int!\n  height: Int!\n  company: String!\n  etc: String\n  photo: [SomeOnePhoto!]!\n  reply: [Reply!]!\n}\n\ntype SomeOnePhoto {\n  id: String!\n  SomeOne: SomeOne!\n  photo: String!\n}\n\ntype Reply {\n  id: String!\n  someone: SomeOne!\n  writer: User!\n  content: String!\n}\n\ntype Chat {\n  id: String!\n  users: [User!]!\n  messages: [Message!]!\n}\n\ntype Message {\n  id: String!\n  text: String!\n  user: User!\n  chat: Chat!\n}\n\ntype Query {\n  myProfile: User!\n  myFollowing: [User!]!\n  myFollowers: [User!]!\n  invite(id: String!): Invitation!\n}\n\ntype Mutation {\n  invite(email: String!): Boolean!\n  signIn(email: String!, password: String!): String!\n  signUp(id: String!, password: String!): Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  myProfile: User;
  myFollowing: Array<User>;
  myFollowers: Array<User>;
  invite: Invitation;
}

export interface InviteQueryArgs {
  id: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
}

export interface Invitation {
  id: string;
  invitedEmail: string;
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

export interface SomeOne {
  id: string;
  matchMaker: User;
  gender: string;
  age: number;
  height: number;
  company: string;
  etc: string | null;
  photo: Array<SomeOnePhoto>;
  reply: Array<Reply>;
}

export interface SomeOnePhoto {
  id: string;
  SomeOne: SomeOne;
  photo: string;
}

export interface Reply {
  id: string;
  someone: SomeOne;
  writer: User;
  content: string;
}

export interface Chat {
  id: string;
  users: Array<User>;
  messages: Array<Message>;
}

export interface Message {
  id: string;
  text: string;
  user: User;
  chat: Chat;
}
