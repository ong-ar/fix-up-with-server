export const typeDefs = ["type User {\n  id: String!\n  email: String!\n  password: String!\n}\n\ntype Invitation {\n  id: String!\n  invitedEmail: String!\n}\n\ntype SomeOne {\n  id: String!\n  user: User!\n  access: String!\n  status: String!\n  gender: String!\n  age: Int!\n  height: Int!\n  company: String!\n  etc: String\n}\n\ntype SomeOnePhoto {\n  id: String!\n  photo: String!\n}\n\ntype Reply {\n  id: String!\n  writer: User!\n  content: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Chat {\n  id: String!\n  users: [User!]!\n  messages: [Message!]!\n}\n\ntype Message {\n  id: String!\n  text: String!\n  user: User!\n  chat: Chat!\n}\n\ntype Query {\n  SomeOneProfile(id: String!): SomeOne!\n  SomeOnePhoto(id: String!): [SomeOnePhoto!]!\n  SomeOneReply(id: String!): [Reply!]!\n  myProfile: User!\n  myFollowing: [User!]!\n  myFollowers: [User!]!\n  myChats: [Chat!]!\n  invite(id: String!): Invitation!\n}\n\ntype Mutation {\n  invite(email: String!): Boolean!\n  signIn(email: String!, password: String!): String!\n  signUp(id: String!, password: String!): Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  SomeOneProfile: SomeOne;
  SomeOnePhoto: Array<SomeOnePhoto>;
  SomeOneReply: Array<Reply>;
  myProfile: User;
  myFollowing: Array<User>;
  myFollowers: Array<User>;
  myChats: Array<Chat>;
  invite: Invitation;
}

export interface SomeOneProfileQueryArgs {
  id: string;
}

export interface SomeOnePhotoQueryArgs {
  id: string;
}

export interface SomeOneReplyQueryArgs {
  id: string;
}

export interface InviteQueryArgs {
  id: string;
}

export interface SomeOne {
  id: string;
  user: User;
  access: string;
  status: string;
  gender: string;
  age: number;
  height: number;
  company: string;
  etc: string | null;
}

export interface User {
  id: string;
  email: string;
  password: string;
}

export interface SomeOnePhoto {
  id: string;
  photo: string;
}

export interface Reply {
  id: string;
  writer: User;
  content: string;
  createdAt: string;
  updatedAt: string;
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
