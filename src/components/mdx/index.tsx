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
  h1: (props: any) => {
    return <h1 id={props.children}>{props.children}</h1>;
  },
  h2: (props: any) => {
    return <h2 id={props.children}>{props.children}</h2>;
  },
  h3: (props: any) => {
    return <h3 id={props.children}>{props.children}</h3>;
  },
};
