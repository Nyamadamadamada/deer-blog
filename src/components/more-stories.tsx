import LatinWord from '@/components/latin-word';
import PostPreview from '@/components/post-preview';
import { FrontmatterWithPath } from '@/types/mds';

type Props = {
  posts: FrontmatterWithPath[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className='mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight'>
        Latest Stories
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-x-8 g:gap-x-8l gap-y-20 md:gap-y-32 mb-32'>
        {posts.map((post) => (
          <PostPreview
            key={post.slug ?? post.path}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
