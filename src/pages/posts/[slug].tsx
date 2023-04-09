import { GetStaticPaths, GetStaticProps } from 'next';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import { MDXRemote } from 'next-mdx-remote';
import CodeBlockFilename from '@/components/code-block-filename';
import MdxLayout from '@/components/layout/mdx-layout';
import PointBlock from '@/components/point-block';
import TopAnchorLink from '@/components/top-anchor-link';
import { getAllPaths, getMdxBySlug } from '@/lib/mdx';
import { MdxSource } from '@/types/mds';

type Props = {
  mdxSource: MdxSource;
};

const mdxElements = {
  TopAnchorLink,
  CodeBlockFilename,
  PointBlock,
};

export default function Page({ mdxSource }: Props) {
  return (
    <MdxLayout meta={mdxSource.scope}>
      <MDXRemote {...mdxSource} components={mdxElements} />
    </MdxLayout>
  );
}

const BASE_PATH = 'posts';

type Params = NextParsedUrlQuery & {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: getAllPaths(BASE_PATH),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const slug = params!.slug;
  const mdxSource = await getMdxBySlug(BASE_PATH, slug);

  return {
    props: {
      mdxSource,
    },
  };
};
