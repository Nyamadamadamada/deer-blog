import Link from 'next/link';
import CoverImage from '@/components/cover-image';
import DateFormatter from '@/components/date-formatter';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, slug }: Props) => {
  return (
    <div className='bg-white shadow-sm'>
      <div className=''>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className='p-2 flex flex-col justify-between h-[12vw] max-h-[150px] min-h-[100px]'>
        <h3 className='text-base leading-snug three-lines-title'>
          <Link as={`/posts/${slug}`} href='/posts/[slug]' className='hover:underline'>
            {title}
          </Link>
        </h3>
        <div className='text-sm text-gray-500'>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
