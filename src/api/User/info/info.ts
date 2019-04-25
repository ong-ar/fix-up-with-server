import { prisma, User, Chat } from "../../../../prisma/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default {
  Query: {
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
