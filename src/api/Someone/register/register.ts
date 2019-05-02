import { prisma } from "../../../../prisma/prisma-client";
import { RegisterMutationArgs } from "../../../types/graph";
import { isAuthenticated } from "../../../middlewares";

export default {
  Mutation: {
    register: async (
      _: any,
      args: RegisterMutationArgs,
      { request },
    ): Promise<boolean> => {
      isAuthenticated(request);
      try {
        const { access, gender, age, height, company, etc } = args;
        const {
          user: { id },
        } = request;
        await prisma.createSomeOne({
          access,
          age,
          company,
          etc,
          gender,
          height,
          user: { connect: { id } },
        });
        return true;
      } catch {
        return false;
      }
    },
  },
};
