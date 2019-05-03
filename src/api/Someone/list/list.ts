import { prisma, SomeOne } from "../../../../prisma/prisma-client";
import { SomeOneListQueryArgs } from "../../../types/graph";
import { isAuthenticated } from "../../../middlewares";

export default {
  Query: {
    SomeOneList: async (
      _,
      args: SomeOneListQueryArgs,
      { request },
    ): Promise<SomeOne[] | null> => {
      isAuthenticated(request);
      const {
        user: { id: user },
      } = request;

      const { page, page_size, order } = args;

      const someOnes: SomeOne[] = await prisma
        .someOnes({
          first: page_size,
          skip: (page - 1) * page_size,
          where: {
            OR: [
              {
                AND: [
                  { user: { id_not: user } },
                  { user: { followers_some: { id: user } } },
                  { status: "REQUEST" },
                  { access: "FOLLOW" },
                ],
              },
              {
                AND: [
                  { user: { id_not: user } },
                  { status: "REQUEST" },
                  { access: "ALL" },
                ],
              },
            ],
          },
        })
        .$fragment(SomeOneFragment);
      return someOnes;
    },
  },
};

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
        photo {
            filename
            mimetype
            encoding
            url
        }
      }`;
