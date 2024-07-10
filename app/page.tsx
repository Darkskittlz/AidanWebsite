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
      <div className="flex flex-col justify-center">
        {posts?.map(
          (post: {
            title: string,
            metadata: { image: { imgix_url: string }, content: string },
          }) => {
            return (
              <div className="items-center pt-4 mx-2 flex flex-col" key={post.title}>
                <div className="smMobile:w-full desktop:w-1/3 justify-center backdrop-blur-lg p-4">
                  <div>
                    <h1 className="text-3xl text-center">{post.title}</h1>
                  </div>
                  <div className="justify-center flex">
                    <img
                      className="h-96 rounded-xl"
                      src={`${post.metadata.image.imgix_url}?w=500&auto=format,compression`}
                      alt={post.title}
                    />
                  </div>
                  <div className="py-4 px-4" dangerouslySetInnerHTML={{ __html: post.metadata.content }} />
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="w-full grid justify-center grid-cols-1">
        <div key="listen" className="items-center flex flex-col smMobile:w-full">
          <h1 className="text-center py-4 text-3xl uppercase"> Listen </h1>
          <iframe className="rounded-xl" src="https://open.spotify.com/embed/artist/2w251FvFhXVbtcc3iwmfXV?utm_source=generator" width="400px" height="384px" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div key="watch" className="items-center flex flex-col smMobile:w-full">
          <h1 className="text-center py-4 text-3xl uppercase"> Watch </h1>
          <iframe width="400px" height="384px" className="rounded-xl" src="https://www.youtube.com/embed/d1NSCg0M1FQ" title="TAKE YOU THERE Official Music Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          <button className="border mt-4 border-blue rounded-xl desktop:w-1/3 smMobile:w-2/4 justify-center cursor-pointer p-6 text-white target:shadow-lg bg-blue">
            <a target="_blank" href="https://www.youtube.com/@aidanpaulmusic">Youtube Channel</a>
          </button>
        </div>
        <div key="Shop" className="items-center flex flex-col smMobile:w-full">
          <h1 className="text-center py-4 text-3xl uppercase"> Support </h1>
          <img className="h-96 object-center rounded-lg" src="/bandcamp.png" />
          <button className="border mt-4 border-blue rounded-xl desktop:w-1/2 smMobile:w-2/4 justify-center cursor-pointer p-6 text-white target:shadow-lg bg-blue">
            <a target="_blank" href="https://aidanpaul.bandcamp.com/track/alone-again-on-christmas-day"> BandCamp </a>
          </button>
        </div>
      </div>
    </>
  );
}

