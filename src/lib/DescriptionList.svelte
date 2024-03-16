<script>
  export let items;
</script>

<dl class="text-sm">
  {#each items as item}
    <div class="flex mb-2">
      {#if item.value}
        <dt class="font-bold mr-2">{item.key}:</dt>
        <dd>{item.value}</dd>
      {/if}
    </div>
  {/each}
</dl>
