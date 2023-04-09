import BlockTitle from './block-title';

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const AsaideBlock = ({ title, children }: Props) => {
  return (
    <div className='mt-[-20%] [&:nth-child(2)]:mt-[4vw]'>
      <BlockTitle title={title ?? 'About'} />
      <div className='shadow-md bg-white p-4'>{children}</div>
    </div>
  );
};

export default AsaideBlock;
