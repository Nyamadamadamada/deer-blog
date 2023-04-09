import { useEffect, useRef } from "react";

declare global {
  interface Window {
    twttr: any;
  }
}

const Tweet = () => {
  useEffect(() => {
    window.twttr?.widgets.load();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: generateEmbedHtml() }} />;
};

const generateEmbedHtml = (): string => {
  return `<blockquote class="twitter-tweet">
        <a
          class="twitter-timeline"
          data-lang="ja"
          data-width="250"
          data-height="300"
          data-dnt="true"
          data-chrome="noheader"
          href="https://twitter.com/madamadaTech?ref_src=twsrc%5Etfw"
        >
          Tweets by madamadaTech
        </a>
      </blockquote>`;
};

export default Tweet;
