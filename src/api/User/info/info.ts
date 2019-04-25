import { prisma, User, Chat } from "../../../../prisma/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default {
  Query: {
    myChats: async (_, __, { request }): Promise<Chat[]> => {
      isAuthenticated(request);
      const {
        user: { id },
      } = request;
      const fragment = `fragment chatsWithUsers on Chat {
        id
        users {
          id
          email
          password
        }
        messages(last:1) {
          id
          text
          user {
            id
            email
            password
          }
        }
      }`;

      const chats: Chat[] = await prisma
        .user({ id })
        .chats()
        .$fragment(fragment);

      return chats;
    },
    myFollowers: async (_, __, { request }): Promise<User[]> => {
      isAuthenticated(request);
      const {
        user: { id },
      } = request;
      const followers = await prisma.user({ id }).followers();
      return followers;
    },
    myFollowing: async (_, __, { request }): Promise<User[]> => {
      isAuthenticated(request);
      const {
        user: { id },
      } = request;
      const following = await prisma.user({ id }).following();
      return following;
    },
    myProfile: async (_, __, { request }): Promise<User> => {
      isAuthenticated(request);
      const {
        user: { id },
      } = request;
      const user = await prisma.user({ id });
      return user;
    },
  },
};
