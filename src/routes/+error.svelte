<script lang="ts">
  import { page } from '$app/stores';
  import { Meta } from '$lib/components/index';
</script>

<Meta title={`${$page.status} - ${$page.error?.message}`} />

<div class="mx-auto my-40 w-11/12 max-w-3xl text-center">
  <h1 class="text-5xl font-bold">{$page.status}</h1>
  <h1 class="mt-2 text-4xl font-bold text-text-secondary">
    {$page.error?.message}
  </h1>
</div>
