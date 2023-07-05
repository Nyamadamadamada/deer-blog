import { GetStaticPaths, GetStaticProps } from 'next';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import { MDXRemote } from 'next-mdx-remote';
import MdxLayout from '@/components/layout/mdx-layout';
import { components } from '@/components/mdx';
import { getAllPaths, getMdxBySlug } from '@/lib/mdx';
import { MdxSource } from '@/types/mds';

type Params = NextParsedUrlQuery & {
  slug: string;
};

type Props = {
  mdxSource: MdxSource;
};

export default function Page({ mdxSource }: Props) {
  return (
    <MdxLayout meta={mdxSource.scope}>
      <div className='post'>
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </MdxLayout>
  );
}

const BASE_PATH = 'posts';

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
