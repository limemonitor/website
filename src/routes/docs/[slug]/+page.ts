import type { DocMetadata } from '$lib/types';
import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

/**
 * Remove the positon prefix from a slug.
 * @param slug The original slug to remove the prefix from.
 * @returns The refomatted slug.
 */
const removePos = (slug: string): string => slug.split('-').slice(1).join('-');

export const load: PageLoad = async ({ params }) => {
  try {
    interface Doc {
      content: unknown;
      metadata: DocMetadata;
    }
    let doc: Doc | undefined;

    const paths = import.meta.glob('/docs/*.md');

    for (const path of Object.keys(paths)) {
      const fileSlug = path.split('/').at(-1)?.replace('.md', '');
      if (!fileSlug) continue;
      if (removePos(fileSlug) === params.slug) {
        const file = (await import(
          `../../../../docs/${fileSlug}.md`
          // eslint-disable-next-line jsdoc/check-tag-names
          /** @vite-ignore */
        )) as { default: unknown; metadata: DocMetadata } | undefined;
        console.log(`../../../../docs/${fileSlug}.md`);
        if (file && typeof file === 'object' && 'metadata' in file) {
          const metadata = (file as { metadata: DocMetadata }).metadata as Omit<
            DocMetadata,
            'slug'
          >;
          doc = {
            content: (file as { default: unknown }).default,
            metadata: { slug: params.slug, ...metadata },
          } as Doc;
          break;
        }
      }
    }

    if (!doc) redirect(302, '/404');

    return doc as Doc;
  } catch (err) {
    console.log(err);
    throw error(404, `No doc found for slug "${params.slug}"`);
  }
};
