import { createBucketClient } from '@cosmicjs/sdk';
import 'tailwindcss/tailwind.css';
const cosmic = createBucketClient({
  bucketSlug: process.env.BUCKET_SLUG || '',
  readKey: process.env.BUCKET_READ_KEY || '',
});

export default async function Home() {
  const { objects: posts } = await cosmic.objects
    .find({
      type: 'blog-posts',
    })
    .props('title,metadata.image,metadata.content');
  return (
    <>
      <div className="w-full flex flex-col justify-center mt-12">
        <h1 className="text-center text-5xl">Blog Posts</h1>
        {posts?.map(
          (post: {
            title: string,
            metadata: { image: { imgix_url: string }, content: string },
          }) => {
            return (
              <div className="justify-center flex flex-col" key={post.title}>
                <div>
                  <h1 className="text-3xl py-4 text-red text-center">{post.title}</h1>
                </div>
                <div className="justify-center flex">
                  <img
                    className="h-96 rounded-xl"
                    src={`${post.metadata.image.imgix_url}?w=500&auto=format,compression`}
                    alt={post.title}
                  />
                </div>
                <div className="px-96 py-4" dangerouslySetInnerHTML={{ __html: post.metadata.content }} />
              </div>
            );
          }
        )}
      </div>
    </>
  );
}

