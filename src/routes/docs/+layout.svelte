<script lang="ts">
  import { page } from '$app/stores';
  import type { LayoutData } from './$types';
  export let data: LayoutData;
</script>

<div class="relative mx-auto flex max-w-5xl">
  <div class="relative min-w-52 max-w-52">
    <div class="fixed w-52">
      <div class="mt-10 p-0">
        <div class="font-bold uppercase text-text-primary">Posts</div>
        <div class="mt-2 pr-5">
          {#each data.posts as post}
            <a
              class={`hover:text-text-primary-hover focus-visible::ring block w-full rounded-md px-3 py-1.5 text-sm font-medium text-text-primary ${
                $page.url.pathname.split('/').at(-1) === post.slug
                  ? 'text-primary-color bg-primary'
                  : 'hover:bg-secondary active:bg-secondary-hover'
              }`}
              href={post.slug}
            >
              {post.title}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <div class="grow break-all py-10">
    <slot />
  </div>
</div>
