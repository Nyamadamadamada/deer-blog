import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import { Frontmatter, FrontmatterWithPath, MdxSource } from '@/types/mds';

const resolvePath = (...paths: string[]) => path.resolve(...paths).replaceAll('\\', '/');

const ROOT_PATH = resolvePath(process.cwd());

export const getMdxBySlug = async (basePath: string, slug: string) => {
  const postFilePath = path.join(process.cwd(), basePath, `/${slug}.mdx`);
  const source = fs.readFileSync(postFilePath, 'utf8');
  const { data, content } = matter(source);
  const mdxSource = await serialize(content || '', {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeHighlight],
    },
    parseFrontmatter: true,
    scope: data,
  });

  return mdxSource as MdxSource;
};

export const getAllFrontmatters = (basePath: string): FrontmatterWithPath[] => {
  const PATH = resolvePath(ROOT_PATH, basePath);
  const paths = glob.sync(`${PATH}/**/*.mdx`);

  return [...paths].reverse().map((filePath: string) => {
    const source = fs.readFileSync(resolvePath(filePath), 'utf8');
    const { data } = matter(source);
    const path = filePath.replace(`${PATH}`, '').replace('.mdx', '');
    return {
      ...(data as Frontmatter),
      slug: path.replace('/', ''),
      path: path,
    } as FrontmatterWithPath;
  });
};

export const getAllPaths = (basePath: string) => {
  const frontmatters = getAllFrontmatters(basePath);
  return frontmatters.map((frontmatter) => ({
    params: {
      slug: frontmatter.path.replace('/', ''),
    },
  }));
};
