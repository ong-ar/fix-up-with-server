import { prisma, SomeOne, User } from "../../../../prisma/prisma-client";
import { SomeOneProfileQueryArgs } from "../../../types/graph";
import { isAuthenticated } from "../../../middlewares";

export default {
  Query: {
    SomeOneProfile: async (
      _,
      args: SomeOneProfileQueryArgs,
      { request },
    ): Promise<SomeOne | null> => {
      isAuthenticated(request);
      const {
        user: { id: user },
      } = request;

      const { id } = args;

      if (isAccess(id, user)) {
        const someOne: SomeOne = await prisma
          .someOne({ id })
          .$fragment(SomeOneFragment);
        return someOne;
      } else {
        return null;
      }
    },
  },
};

interface ISomeOne extends SomeOne {
  user: User;
}

const SomeOneFragment = `fragment SomeOneWithUser on SomeOne {
        id
        status
        access
        user {
            id
            email
            password
        }
        gender
        age
        height
        company
        etc
      }`;

const isAccess = async (id: string, user: string): Promise<boolean> => {
  const someOne: ISomeOne = await prisma
    .someOne({ id })
    .$fragment(SomeOneFragment);

  if (someOne.access === "ALL") {
    return true;
  } else if (someOne.access === "FOLLOW") {
    const follow = await prisma
      .user({ id: user })
      .followers({ where: { id: someOne.user.id } });
    if (follow.length) {
      return true;
    }
  }
  return false;
};