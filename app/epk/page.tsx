import { createBucketClient } from '@cosmicjs/sdk';
import 'tailwindcss/tailwind.css';
import { getPost } from '../../lib/cosmic';
import { getRelatedPosts } from '../../lib/cosmic';

const cosmic = createBucketClient({
  bucketSlug: process.env.BUCKET_SLUG || '',
  readKey: process.env.BUCKET_READ_KEY || '',
});


// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: 'epk' };
// }) {
//   const post = await getPost({ params });
//   return {
//     title: `${post.title}`,
//   };
// }

// Posts mapping to be edited to target blog post by slug
// {posts?.map(
//   (post: {
//     title: string,
//     metadata: { image: { imgix_url: string }, content: string },
//   }) => {
//     return (
//       <div className="items-center pt-4 mx-2 flex flex-col" key={post.title}>
//         <div className="smMobile:w-full desktop:w-2/3 justify-center backdrop-blur-lg p-4">
//           <div>
//             <h1 className="text-3xl text-center">{post.title}</h1>
//           </div>
//           <div className="justify-center flex">
//             <img
//               className="h-full rounded-xl"
//               src={`${post.metadata.image.imgix_url}?w=500&auto=format,compression`}
//               alt={post.title}
//             />
//           </div>
//           <div className="py-4 px-4" dangerouslySetInnerHTML={{ __html: post.metadata.content }} />
//         </div>
//       </div>
//     );
//   }
// )}


export default async function EPK() {
  const { objects: posts } = await cosmic.objects
    .find({
      type: 'blog-posts',
    })
    .props('title,metadata.image,metadata.content');
  return (
    <div className="flex flex-col w-full justify-center">
      <div className="rounded-lg  justify-center flex w-full mt-20">
        <h1 className="text-center border border-white items-center w-1/2 rounded-lg py-12 text-xl">EPK Page: In Progress</h1>
      </div>
    </div>
  );
}

