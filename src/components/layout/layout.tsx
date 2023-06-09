import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

import Container from '../container';
import LatinWord from '@/components/latin-word';

export const siteTitle = '鹿テックブログ｜エンジニア向け技術ブログ';

export default function Layout({ children, home }: { children: ReactNode; home?: boolean }) {
  return (
    <div className=''>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='鹿テックブログ｜日々学んだことをアウトプットします。個人開発、設計に関する記事多め。'
        />
        {/* TODO リンクの画像 */}
        {/* <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header></header>
      <Container>
        <main>{children}</main>
        {!home && (
          <div className='mb-10'>
            <Link href='/'>
              <div className='pl-[2rem] text-2xl'>
                <LatinWord word='Back to home'></LatinWord>
              </div>
              <div className='mt-[-1.8rem]'>
                <Image
                  src='/assets/common/arrowToHome.png'
                  alt=''
                  width='78'
                  height='37'
                  className=''
                />
              </div>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}
