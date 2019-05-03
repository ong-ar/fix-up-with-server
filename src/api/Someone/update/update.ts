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
        const { someone_id, access, gender, age, height, company, etc } = args;
        const {
          user: { id },
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
          where: { id: someone_id, user: id },
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
        const { someone_id, status } = args;
        const {
          user: { id },
        } = request;

        await prisma.updateManySomeOnes({
          data: {
            status,
          },
          where: { id: someone_id, user: id },
        });
        return true;
      } catch {
        return false;
      }
    },
  },
};
