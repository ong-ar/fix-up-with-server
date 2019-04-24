import { prisma } from "../../../../prisma/prisma-client";
import { SignUpMutationArgs } from "../../../types/graph";
import { crypt } from "../../../crypt";

export default {
  Mutation: {
    signUp: async (_: any, args: SignUpMutationArgs): Promise<boolean> => {
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
