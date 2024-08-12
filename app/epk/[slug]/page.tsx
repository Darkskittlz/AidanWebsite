import { createBucketClient } from '@cosmicjs/sdk';
import 'tailwindcss/tailwind.css';
import { getPost } from '../../../lib/cosmic';
import { getRelatedPosts } from '../../../lib/cosmic';

const cosmic = createBucketClient({
  bucketSlug: process.env.BUCKET_SLUG || '',
  readKey: process.env.BUCKET_READ_KEY || '',
});


export async function generateMetadata({
  params,
}: {
  params: { slug: 'epk' };
}) {
  const post = await getPost({ params });
  return {
    title: `${post.title}`,
  };
}


// const { object: post } = await cosmic.objects.getPost({ slug });
// const suggestedPosts = await getRelatedPosts({ slug });

export default async function EPK() {
  return (
    <div className="flex flex-col justify-center">
      <h1>Page in progress</h1>
    </div>
  );
}

