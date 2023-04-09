import { Caveat } from 'next/font/google';
import Image from 'next/image';
import LatinWord from '@/components/latin-word';

type Props = {
  title: string;
};

const caveat = Caveat({
  weight: '500',
  subsets: ['latin'],
});

const BlockTitle = ({ title }: Props) => {
  return (
    <div className=''>
      <div className='mt-[10%] h-[2.6vw]'>
        <Image src={'/assets/common/underline.png'} alt={''} width='100' height='200' />
      </div>
      <div className='mt-[-20%] text-[2.6vw]'>
        <LatinWord word={title} />
      </div>
    </div>
  );
};

export default BlockTitle;
