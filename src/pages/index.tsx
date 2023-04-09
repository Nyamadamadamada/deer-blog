import { GetStaticProps } from 'next';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Asaide from '@/components/aside';
import AsaideBlock from '@/components/aside-block';
import Container from '@/components/container';
import HeroPost from '@/components/hero-post';
import Intro from '@/components/intro';
import Layout, { siteTitle } from '@/components/layout/layout';
import MoreStories from '@/components/more-stories';
import Tweet from '@/components/tweet';
import { getAllFrontmatters } from '@/lib/mdx';
import { FrontmatterWithPath } from '@/types/mds';

type Params = {
  allPostsData: FrontmatterWithPath[];
};

export default function Home({ allPostsData }: { allPostsData: FrontmatterWithPath[] }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        <Intro />
        <div className='flex justify-between'>
          <div className='w-full lg:w-[70%]'>
            {allPostsData[0] && (
              <HeroPost
                title={allPostsData[0].title}
                coverImage={allPostsData[0].coverImage}
                date={allPostsData[0].date}
                slug={allPostsData[0].slug}
                description={allPostsData[0].description}
              />
            )}
            {allPostsData.length > 0 && <MoreStories posts={allPostsData} />}
          </div>
          <Asaide>
            <AsaideBlock title='About'>
              <div className='m-auto'>
                <Image
                  src='/assets/common/profile.png'
                  alt='profile'
                  width='100'
                  height='100'
                  className='rounded-full m-auto'
                />
                <div className='text-[1vw] p-4'>
                  こんにちは！鹿と申します。
                  <br />
                  主にWebアプリケーション開発に携わっています。
                  <br /> <br />
                  個人開発や設計に関する知識など、エンジニア価値を高める情報をお届けできるよう努めます！
                </div>
              </div>
            </AsaideBlock>
            <AsaideBlock title='Twitter'>
              <div className='text-[1vw] p-4'>
                鹿TechBlogのtwitterアカウントです。
                <br />
                気ままにつぶやいています。
              </div>
              <Tweet />
              <Script src='https://platform.twitter.com/widgets.js' strategy='lazyOnload' />
            </AsaideBlock>
          </Asaide>
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Params> = async () => {
  const BASE_PATH = 'posts';

  const allPostsData = getAllFrontmatters(BASE_PATH);
  return {
    props: {
      allPostsData,
    },
  };
};
