import { useEffect } from 'react';
import tocbot from 'tocbot';

export const Toc = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.post',
      headingSelector: 'h1, h2, h3',
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <>
      <div className='toc sticky top-10' />
      <style jsx global>{`
        .toc {
          border-radius: 0.25rem;
          padding: 1rem;
          font-size: 0.875rem;
        }

        .toc-list .toc-list {
          padding-left: 1rem;
          padding-top: 0.5rem;
        }

        .toc-list-item {
          padding-bottom: 0.5rem;
        }

        .toc-list-item:last-child {
          padding-bottom: 0;
        }

        .toc-link {
          color: var(--text-secondary);
        }

        .is-active-link {
          color: var(--text-primary);
          font-weight: 700;
        }
      `}</style>
    </>
  );
};

export default Toc;
// 参考
// https://blog.kimizuy.dev/posts/using-tocbot
