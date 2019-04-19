export const typeDefs = ["type User {\n  id: String!\n  name: String!\n  email: String\n}\n\ntype Query {\n  myProfile: User!\n}\n"];
/* tslint:disable */

export interface Query {
  myProfile: User;
}

export interface User {
  id: string;
  name: string;
  email: string | null;
}
