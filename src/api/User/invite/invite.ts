import { prisma } from "../../../../prisma/prisma-client";
import {
  InviteMutationArgs,
  InviteQueryArgs,
  Invitation,
} from "../../../types/graph";
import { isAuthenticated } from "../../../middlewares";

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
  Query: {
    invite: async (_: any, args: InviteQueryArgs): Promise<Invitation> => {
      const { id } = args;
      const invitation = await prisma.invitation({ id });
      return invitation;
    },
  },
};
