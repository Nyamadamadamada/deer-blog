import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = src && (
    <div className=''>
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className={cn('w-full m-auto', {
          'brightness-100 hover:brightness-105 duration-200': slug,
        })}
        width={960}
        height={540}
      />
    </div>
  );
  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link as={`/posts/${slug}`} href='/posts/[slug]' aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
