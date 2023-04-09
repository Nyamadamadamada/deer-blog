import utilStyles from '@/styles/utils.module.css';

type Props = {
  filename: string;
};

const CodeBlockFilename = ({ filename }: Props) => {
  return (
    <div className=''>
      <span className={utilStyles.codeBlockFilename}>{filename}</span>
    </div>
  );
};

export default CodeBlockFilename;
