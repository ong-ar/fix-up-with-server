import { prisma } from "../../../../prisma/prisma-client";
import { SignInMutationArgs } from "../../../types/graph";
import { crypt } from "../../../crypt";
import { signJwt } from "../../../passport";

export default {
  Mutation: {
    signIn: async (_: any, args: SignInMutationArgs): Promise<string> => {
      const { email, password } = args;
      const user = await prisma.user({ email });
      if (user && user.password === crypt(password)) {
        return signJwt(user.id);
      } else {
        throw Error("email or password is wrong!");
      }
    },
  },
};
