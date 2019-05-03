import { prisma } from "../../../../prisma/prisma-client";
import { SomeOneRegisterMutationArgs } from "../../../types/graph";
import { isAuthenticated } from "../../../middlewares";

export default {
  Mutation: {
    SomeOneRegister: async (
      _: any,
      args: SomeOneRegisterMutationArgs,
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
