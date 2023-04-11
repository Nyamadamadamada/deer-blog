// eslint-disable-next-line import/named
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Frontmatter = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  description: string;
  summary?: string[];
};

export type FrontmatterWithPath = Frontmatter & {
  path: string;
  ogImagePath: string;
};

export type MdxSource = Omit<MDXRemoteSerializeResult, 'scope'> & {
  scope: FrontmatterWithPath;
};
