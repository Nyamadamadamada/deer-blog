import markdownStyles from '@/styles/markdown-styles.module.css';

type Props = {
  children: React.ReactNode;
};

const PostBody = ({ children }: Props) => {
  return (
    <div className='mx-auto'>
      <div className={markdownStyles['markdown']}>{children}</div>
    </div>
  );
};

export default PostBody;
