type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className='container mx-auto md:px-0'>{children}</div>;
};

export default Container;
