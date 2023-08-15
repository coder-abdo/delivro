import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "7ugoio0w",
  useCdn: true,
  dataset: "production",
  apiVersion: "2023-08-15",
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export default client;
