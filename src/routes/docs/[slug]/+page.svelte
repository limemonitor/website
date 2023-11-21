<script lang="ts">
  import { Meta } from '$lib/components';
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<!-- <Meta title={data.metadata.title} description={data.metadata.description} />

<div class="pl-10">
  <h1 class="text-4xl font-bold text-text-primary">{data.metadata.title}</h1>
  <p class="mt-2 text-lg text-text-secondary">{data.metadata.description}</p>
  <p class="mt-2 text-lg text-sm text-text-faint">
    Last Updated: {new Date(data.metadata.last_updated).toDateString()}
  </p>
  <div class="my-5 h-px w-full bg-border"></div>
  <div class="text-text-secondary">
    <svelte:component this={data.content} />
  </div>
</div> -->

<div class="">
  {JSON.stringify(data)}
</div>
