import Image from 'next/image';
import { ReactNode } from 'react';
import utilStyles from '@/styles/utils.module.css';

type Props = {
  title: string;
  children: ReactNode;
};

const PointBlock = ({ title, children }: Props) => {
  return (
    <div className={`border-2 border-green-600/50 rounded-lg mt-16  mx-3 p-4 bg-green-50`}>
      <h5 className='flex font-bold text-lg'>
        <Image
          src='/assets/common/bookIcon.png'
          className='inline-block mr-3 !mb-0'
          width='35'
          height='40'
          alt={'icon'}
        />
        {title}
      </h5>
      <div>{children}</div>
    </div>
  );
};

export default PointBlock;
