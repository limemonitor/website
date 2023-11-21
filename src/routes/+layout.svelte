<script lang="ts">
  import Footer from '$lib/layout/Footer.svelte';
  import Header from '$lib/layout/Header.svelte';

  import '../app.css';
</script>

<html lang="en" class="">
  <body>
    <Header />
    <div class="relative min-h-[50vh]">
      <slot />
    </div>
    <Footer />
  </body></html
>
