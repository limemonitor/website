<script lang="ts">
  import { Button, Meta } from '$lib/components/index';
</script>

<Meta title="Home" />

<div class="mx-auto max-w-5xl py-40">
  <div class="flex justify-between">
    <div class="max-w-xl">
      <h1 class="text-6xl font-extrabold leading-[4rem] text-text-primary">
        Take Back <span class="text-primary">Control</span> <br /> of Your Privacy
      </h1>
      <p class="mt-5 text-lg text-text-secondary">
        LimeMonitor is your all-in-one solution for tracking, analyzing, and
        optimizing network usage, putting you in control.
      </p>
      <div class="mt-8">
        <a href="/docs/getting-started/installation" class="">
          <Button label="Get Started" size="lg" />
        </a>
      </div>
    </div>
    <div class="flex w-1/2 justify-end">
      <img
        src="/home/world-location.svg"
        alt="World location graphic"
        class="mt-5 h-60 w-60"
      />
    </div>
  </div>
</div>
