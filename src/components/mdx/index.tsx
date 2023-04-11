import Image from 'next/image';
import CodeBlockFilename from '@/components/code-block-filename';
import PointBlock from '@/components/point-block';
import TopAnchorLink from '@/components/top-anchor-link';

export const components: {
  [key: string]: any;
} = {
  div: (props: any) => <div {...props} />,
  a: (props: any) => <a target='_blank' rel='noopener noreferrer' {...props} />,
  TopAnchorLink,
  CodeBlockFilename,
  PointBlock,
  Image,
};
