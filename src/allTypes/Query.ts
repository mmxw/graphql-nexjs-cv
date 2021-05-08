import { idArg, queryType } from "@nexus/schema";
import { data } from "../data";
import { Bio } from "./index";
import { Position } from "./Position";

export const Query = queryType({
  definition(t) {
    t.field("bio", {
      type: Bio,
      resolve: () => data.bio,
    });
    t.list.field("positions", {
      type: Position,
      resolve: () => data.positions,
    });
    t.field("position", {
      type: Position,
      description: "find a position by its id",
      nullable: true,
      args: { id: idArg() },
      resolve: (root, { id }: { id: string }, ctx) =>
        data.positions.find((position) =>
          data.positions.find((position) => position.id === id)
        ),
    });
  },
});
