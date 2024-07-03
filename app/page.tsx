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
      <div className="w-full grid justify-center grid-cols-3">
        <div key="listen" className="items-center flex flex-col smMobile:w-full desktop:w-1/2">
          <h1 className="text-center py-4 text-3xl uppercase"> Listen </h1>
          <iframe className="rounded-xl" src="https://open.spotify.com/embed/artist/2w251FvFhXVbtcc3iwmfXV?utm_source=generator&theme=0" width="500px" height="384px" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div key="watch" className="items-center flex flex-col smMobile:w-full desktop:w-1/2">
          <h1 className="text-center py-4 text-3xl uppercase"> Watch </h1>
          <iframe width="500px" height="384px" src="https://www.youtube.com/embed/d1NSCg0M1FQ" title="TAKE YOU THERE Official Music Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
          <button className="border mt-4 border-blue rounded-full desktop:w-1/3 smMobile:w-1/4 justify-center cursor-pointer p-6 text-white target:shadow-lg bg-blue">
            <a target="_blank" href="https://youtu.be/d1nscg0m1fq?si=--5lve_smtdrm3ur">Youtube Channel</a>
          </button>
        </div>
        <div key="Shop" className="items-center flex flex-col smMobile:w-full desktop:w-1/2">
          <h1 className="text-center py-4 text-3xl uppercase"> Shop </h1>
          <img className="h-96 object-center rounded-lg" src="/bandcamp.png" />
          <button className="border mt-4 border-blue rounded-full desktop:w-1/3 smMobile:w-1/4 justify-center cursor-pointer p-6 text-white target:shadow-lg bg-blue">
            <a target="_blank" href="https://aidanpaul.bandcamp.com/album/sunlion-record"> BandCamp </a>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-12">
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

