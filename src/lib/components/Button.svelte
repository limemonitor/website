<script lang="ts">
  import Icon from '@iconify/svelte';

  export let label: string | undefined = undefined;
  export let color:
    | 'primary'
    | 'secondary'
    | 'default'
    | 'danger'
    | 'success'
    | 'warning' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let outline: boolean = false;
  export let icon: string | undefined = undefined;
  export let disabled: boolean = false;
  export let loading: boolean = false;

  const sizeClasses = {
    sm: 'text-xs py-1 px-3',
    md: 'text-sm px-5 py-2 font-medium',
    lg: 'text-base px-7 py-3 font-medium',
  };

  const colorClasses = (outline: boolean) => ({
    primary: outline
      ? 'bg-transparent text-text-primary border-primary'
      : 'bg-primary text-primary-text border-transparent',
    secondary: outline
      ? 'bg-transparent text-text border-secondary'
      : 'bg-secondary text-secondary-text border-transparent',
    default: outline
      ? 'bg-transparent text-text border-default'
      : 'bg-default text-text border-transparent',
    success: outline
      ? 'bg-transparent text-success border-success'
      : 'bg-success text-white border-transparent',
    warning: outline
      ? 'bg-transparent text-warning border-warning'
      : 'bg-warning text-black border-transparent',
    danger: outline
      ? 'bg-transparent text-danger border-danger'
      : 'bg-danger text-white border-transparent',
  });

  const colorHoverClasses = (outline: boolean) => ({
    primary: outline
      ? 'hover:bg-primary/10 active:bg-primary/20 hover:text-text active:text-text'
      : 'hover:bg-primary-hover active:bg-primary-active',
    secondary: outline
      ? 'hover:bg-text/10 active:bg-text/20'
      : 'hover:bg-secondary-hover active:bg-secondary-active',
    default: outline
      ? 'hover:bg-default/10 active:bg-default/20'
      : 'hover:bg-default-hover active:bg-default-active',
    success: outline
      ? 'hover:bg-success/10 active:bg-success/20'
      : 'hover:bg-success-hover active:bg-success-active',
    warning: outline
      ? 'hover:bg-warning/10 active:bg-warning/20'
      : 'hover:bg-warning-hover active:bg-warning-active',
    danger: outline
      ? 'hover:bg-danger/10 active:bg-danger/20'
      : 'hover:bg-danger-hover active:bg-danger-active',
  });
</script>

<button
  on:click
  {...$$props}
  class={`rounded-full border text-sm transition duration-200 ${
    disabled
      ? 'cursor-not-allowed opacity-50'
      : colorHoverClasses(outline)[color]
  } ${sizeClasses[size]} ${colorClasses(outline)[color]}`}
>
  {#if loading}
    <Icon
      icon="humbleicons:refresh"
      class={`inline-block animate-spin ${
        size === 'sm'
          ? 'mb-0.5 mr-0.5 h-3.5 w-3.5'
          : '-ml-0.5 mb-0.5 mr-0.5 h-4 w-4'
      }`}
    />
  {:else if icon}
    <Icon
      {icon}
      class={`inline-block  ${
        size === 'sm'
          ? 'mb-0.5 mr-0.5 h-3.5 w-3.5'
          : '-ml-0.5 mb-0.5 mr-0.5 h-4 w-4'
      }`}
    />
  {/if}

  {#if label}
    {label}
  {:else}
    <slot />
  {/if}
</button>
