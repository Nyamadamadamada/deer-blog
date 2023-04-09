type Props = {
  children?: React.ReactNode;
};

const Asaide = ({ children }: Props) => {
  return <aside className='hidden lg:block mx-auto px-4 w-[26%]'>{children}</aside>;
};

export default Asaide;
