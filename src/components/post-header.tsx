import Avatar from './avatar';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';
import PostTitle from './post-title';

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <div id='markdown-header'>
      <PostTitle>{title}</PostTitle>
      <div className='mb-8 md:mb-8 sm:mx-0'>
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className='mx-auto'>
        <div className='mb-6 text-lg text-gray-500'>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
