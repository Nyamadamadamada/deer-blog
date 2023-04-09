import { Caveat } from 'next/font/google';

type Props = {
  word: string;
};

const caveat = Caveat({
  weight: '500',
  subsets: ['latin'],
});

const LatinWord = ({ word }: Props) => {
  return <p className={` ${caveat.className}`}>{word}</p>;
};

export default LatinWord;
