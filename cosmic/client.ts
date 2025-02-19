import { createBucketClient } from "@cosmicjs/sdk";

// Make sure to add/update your ENV variables
export const cosmic = createBucketClient({
  bucketSlug: process.env.BUCKET_SLUG || "COSMIC_BUCKET_SLUG",
  readKey: process.env.BUCKET_READ_KEY || "COSMIC_READ_KEY",
  writeKey: process.env.COSMIC_WRITE_KEY || "COSMIC_WRITE_KEY",
});
