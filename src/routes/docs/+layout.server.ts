import type { DocMetadata } from '$lib/types';
import type { LayoutServerLoad } from './$types';

/**
 * Remove the positon prefix from a slug.
 * @param slug The original slug to remove the prefix from.
 * @returns The refomatted slug.
 */
const removePos = (slug: string): string => slug.split('-').slice(1).join('-');

/**
 * Get the position from a slug.
 * @param slug The original slug to get the position from.
 * @returns The position.
 * @throws If the position is not a number.
 */
const getSlugPosition = (slug: string): number => {
  const pos = slug.split('-')[0];
  if (!pos) throw new Error(`No slug position found: ${slug}`);
  const position = parseInt(pos, 10);
  if (Number.isNaN(position)) throw new Error(`Invalid slug position: ${slug}`);
  return position;
};

export const load: LayoutServerLoad = () => {
  let posts = [];

  const paths = import.meta.glob('/docs/*.md', { eager: true });

  for (const path of Object.keys(paths)) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');
    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<DocMetadata, 'slug'>;
      const post = { slug, ...metadata } satisfies DocMetadata;
      const position = getSlugPosition(slug);
      post.position = position;
      post.slug = removePos(slug);
      posts.push(post);
    }
  }

  posts = posts.sort(
    (first, second) => (first.position as number) - (second.position as number)
  );

  return { posts };
};
