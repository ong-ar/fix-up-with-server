import { prisma } from "../../../../prisma/prisma-client";
import {
  SomeOneUpdateMutationArgs,
  SomeOneUpdateStatusMutationArgs,
} from "../../../types/graph";
import { isAuthenticated } from "../../../middlewares";

export default {
  Mutation: {
    SomeOneUpdate: async (
      _: any,
      args: SomeOneUpdateMutationArgs,
      { request },
    ): Promise<boolean> => {
      isAuthenticated(request);
      try {
        const { id, access, gender, age, height, company, etc } = args;
        const {
          user: { id: user },
        } = request;

        await prisma.updateManySomeOnes({
          data: {
            access,
            age,
            company,
            etc,
            gender,
            height,
          },
          where: { id, user },
        });
        return true;
      } catch {
        return false;
      }
    },
    SomeOneUpdateStatus: async (
      _: any,
      args: SomeOneUpdateStatusMutationArgs,
      { request },
    ): Promise<boolean> => {
      isAuthenticated(request);
      try {
        const { id, status } = args;
        const {
          user: { id: user },
        } = request;

        await prisma.updateManySomeOnes({
          data: {
            status,
          },
          where: { id, user },
        });
        return true;
      } catch {
        return false;
      }
    },
  },
};
