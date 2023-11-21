import type { DocMetadata } from '$lib/types';
import { json } from '@sveltejs/kit';

function getPosts(): DocMetadata[] {
  let posts = [];

  const paths = import.meta.glob('/docs/*.md', { eager: true });

  for (const path of Object.keys(paths)) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');
    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<DocMetadata, 'slug'>;
      const post = { slug, ...metadata } satisfies DocMetadata;
      posts.push(post);
    }
  }

  posts = posts.sort((first, second) => {
    return new Date(second.date).getTime() - new Date(first.date).getTime();
  });

  return posts;
}

export function GET(): Response {
  const posts = getPosts();
  return json(posts);
}
