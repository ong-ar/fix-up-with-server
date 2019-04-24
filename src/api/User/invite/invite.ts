import { prisma } from "../../../../prisma/prisma-client";
import { InviteMutationArgs } from "../../../types/graph";
import { isAuthenticated } from "../../../middlewares";
import { connect } from "http2";

export default {
  Mutation: {
    invite: async (
      _: any,
      args: InviteMutationArgs,
      { request },
    ): Promise<boolean> => {
      isAuthenticated(request);
      try {
        const { email } = args;
        const {
          user: { id },
        } = request;

        await prisma.createInvitation({
          invitedEmail: email,
          invitingUser: { connect: { id } },
        });
        return true;
      } catch {
        return false;
      }
    },
  },
};
