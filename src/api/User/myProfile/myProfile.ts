import { prisma, User } from "../../../../prisma/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default {
  Query: {
    myProfile: async (_, __, ___): Promise<User> => {
      const user = await prisma.user({ id: "cjunlpnunifwr0b22simljax4" });
      return user;
    },
  },
};
