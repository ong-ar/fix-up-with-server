import { prisma, User } from "../../../../prisma/prisma-client";
import { CreateProfileMutationArgs } from "../../../types/graph";
import { crypt } from "../../../crypt";

export default {
  Mutation: {
    createProfile: async (
      _,
      args: CreateProfileMutationArgs,
    ): Promise<boolean> => {
      try {
        const { id, password } = args;

        const invitation = await prisma.invitation({ id });
        if (invitation && invitation.status === "REQUEST") {
          await prisma.updateInvitation({
            data: {
              status: "COMPLETE",
              user: {
                create: {
                  email: invitation.invitedEmail,
                  password: crypt(password),
                },
              },
            },
            where: { id },
          });

          return true;
        } else {
          return false;
        }
      } catch {
        return false;
      }
    },
  },
};
