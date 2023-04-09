import { Caveat } from 'next/font/google';
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
      <img src={'/assets/common/underline.png'} alt={''} className='mt-[10%] h-[2.6vw]' />
      <div className='mt-[-20%] text-[2.6vw]'>
        <LatinWord word={title} />
      </div>
    </div>
  );
};

export default BlockTitle;
