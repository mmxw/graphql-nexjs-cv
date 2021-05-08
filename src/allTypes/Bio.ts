import { objectType } from "@nexus/schema";

export const Bio = objectType({
  name: "Bio",
  definition(t) {
    t.string("name");
    t.string("email");
    t.string("tagline");
    t.url("github", (bio) => new URL(bio.github));
    t.url("linkedin", (bio) => new URL(bio.linkedin));
    t.url("twitter", (bio) => new URL(bio.twitter));
  },
});
