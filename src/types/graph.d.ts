export const typeDefs = ["type User {\n  id: String!\n  email: String!\n  password: String!\n}\n\ntype Invitation {\n  id: String!\n  invitedEmail: String!\n}\n\ntype SomeOne {\n  id: String!\n  user: User!\n  access: String!\n  status: String!\n  gender: String!\n  age: Int!\n  height: Int!\n  company: String!\n  etc: String\n  photo: [SomeOnePhoto!]!\n}\n\ntype SomeOnePhoto {\n  id: String!\n  photo: String!\n}\n\ntype Reply {\n  id: String!\n  writer: User!\n  content: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Chat {\n  id: String!\n  users: [User!]!\n  messages: [Message!]!\n}\n\ntype Message {\n  id: String!\n  text: String!\n  user: User!\n  chat: Chat!\n}\n\nenum accessType {\n  ALL\n  FOLLOW\n  NOTHING\n}\n\nenum genderType {\n  MALE\n  FEMALE\n}\n\nenum companyType {\n  LARGE\n  MEDIUM\n  FOREIGN\n}\n\nenum statusType {\n  REQUEST\n  COMPLETE\n}\n\ntype Query {\n  SomeOneProfile(id: String!): SomeOne!\n  SomeOnePhoto(id: String!): [SomeOnePhoto!]!\n  SomeOneReply(id: String!): [Reply!]!\n  SomeOneList(page_size: Int!, page: Int!, order: String!): [SomeOne!]!\n  myProfile: User!\n  myFollowing: [User!]!\n  myFollowers: [User!]!\n  myChats: [Chat!]!\n  invite(id: String!): Invitation!\n}\n\ntype Mutation {\n  SomeOneRegister(access: accessType!, gender: genderType!, age: Int!, height: Int!, company: companyType!, etc: String!): Boolean!\n  SomeOneUpdate(id: String!, access: accessType!, gender: genderType!, age: Int!, height: Int!, company: companyType!, etc: String!): Boolean!\n  SomeOneUpdateStatus(id: String!, status: statusType!): Boolean!\n  invite(email: String!): Boolean!\n  signIn(email: String!, password: String!): String!\n  signUp(id: String!, password: String!): Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  SomeOneProfile: SomeOne;
  SomeOnePhoto: Array<SomeOnePhoto>;
  SomeOneReply: Array<Reply>;
  SomeOneList: Array<SomeOne>;
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

export interface SomeOneListQueryArgs {
  page_size: number;
  page: number;
  order: string;
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
  photo: Array<SomeOnePhoto>;
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
  SomeOneRegister: boolean;
  SomeOneUpdate: boolean;
  SomeOneUpdateStatus: boolean;
  invite: boolean;
  signIn: string;
  signUp: boolean;
}

export interface SomeOneRegisterMutationArgs {
  access: accessType;
  gender: genderType;
  age: number;
  height: number;
  company: companyType;
  etc: string;
}

export interface SomeOneUpdateMutationArgs {
  id: string;
  access: accessType;
  gender: genderType;
  age: number;
  height: number;
  company: companyType;
  etc: string;
}

export interface SomeOneUpdateStatusMutationArgs {
  id: string;
  status: statusType;
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

export type accessType = "ALL" | "FOLLOW" | "NOTHING";

export type genderType = "MALE" | "FEMALE";

export type companyType = "LARGE" | "MEDIUM" | "FOREIGN";

export type statusType = "REQUEST" | "COMPLETE";
