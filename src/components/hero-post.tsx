import Link from 'next/link';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  description: string;
  slug: string;
};

const HeroPost = ({ title, coverImage, date, description, slug }: Props) => {
  return (
    <section>
      <div className='mb-8 md:mb-16 shadow-sm'>
        <CoverImage title={title} src={coverImage} slug={slug} />
        <div className='mb-20 md:mb-28 p-4 bg-white'>
          <div>
            <h3 className='mb-4 text-4xl lg:text-5xl leading-tight'>
              <Link as={`/posts/${slug}`} href='/posts/[slug]' className='hover:underline'>
                {title}
              </Link>
            </h3>
            <div className='mb-4 md:mb-0 text-sm text-gray-500'>
              <DateFormatter dateString={date} />
            </div>
          </div>
          <div>
            <p className='text-lg leading-relaxed mb-4'>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
