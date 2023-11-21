import { redirect } from '@sveltejs/kit';

export function load(): void {
  throw redirect(302, './docs/installation');
}
