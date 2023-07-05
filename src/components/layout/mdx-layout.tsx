import Head from 'next/head';

import Container from '@/components/container';
import Header from '@/components/header';
import Layout from '@/components/layout/layout';
import PostBody from '@/components/post-body';
import PostHeader from '@/components/post-header';
import PostSummary from '@/components/post-summary';
import Toc from '@/components/toc';
import { CMS_NAME } from '@/lib/constants';
import { FrontmatterWithPath } from '@/types/mds';

type Props = {
  meta: FrontmatterWithPath;
  children: React.ReactNode;
};

export default function MdxLayout({ meta, children }: Props) {
  const title = `${meta.title} | Deer Blog with ${CMS_NAME}`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta property='og:image' content={process.env.NEXT_PUBLIC_URL + meta.coverImage} />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={meta.description} />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/a11y-dark.min.css'
        ></link>
      </Head>
      <Container>
        <Header />
        <div className='flex content-center	'>
          <article className='mb-32 p-10 bg-white max-w-3xl mx-auto shadow-sm'>
            <PostHeader title={meta.title} coverImage={meta.coverImage} date={meta.date} />
            {meta.summary && <PostSummary summary={meta.summary} />}
            <PostBody>{children}</PostBody>
          </article>
          <div className='invisible lg:visible relative'>
            <Toc />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
