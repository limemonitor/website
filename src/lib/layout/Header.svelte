<script lang="ts">
  const links = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Docs',
      href: '/docs/installation',
    },
    {
      title: 'Changelog',
      href: '/changelog',
    },
  ];
</script>

<div class="relative h-20 w-screen"></div>

<div
  class="fixed left-0 top-0 h-20 w-screen bg-white shadow-[0_5px_15px_rgba(0,0,0,0.05)]"
>
  <div class="mx-auto flex max-w-5xl justify-between">
    <a
      href="/"
      class="my-0.5 py-5 text-2xl font-extrabold text-gray-600 focus-visible:ring"
    >
      LimeMonitor
    </a>

    <div class="flex py-4">
      {#each links as link}
        <a
          href={link.href}
          class="px-4 py-3 font-semibold text-gray-600 ring-inset hover:text-black hover:underline focus-visible:ring active:text-black active:underline"
        >
          {link.title}
        </a>
      {/each}
    </div>

    <div class="my-5 flex">
      <div>
        <button
          class="focus-visible:transiton-none rounded-3xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-text ring-text transition duration-200 hover:bg-primary-hover focus-visible:ring active:bg-primary-active"
          >Download</button
        >
      </div>
    </div>
  </div>
</div>
