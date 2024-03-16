<script>
  export let country;

  $: ({ cca3, flags, region } = country);
  $: name = country.name?.common;
  $: capital = country.capital?.[0] ?? 'N/A';
  $: population = country.population?.toLocaleString('en-us');
</script>

<a
  class="appearance-none w-[250px] bg-white border border-gray-200 shadow dark:bg-gray-700 dark:border-gray-600"
  href="/country/{cca3}"
>
  <div
    class="border-b border-gray-300 h-40 bg-no-repeat bg-cover bg-center dark:border-gray-700"
    style="background-image: url('{flags?.svg}')"
  ></div>
  <div class="p-5 text-left">
    <h2 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
      {name}
    </h2>
    <dl class="text-sm grid grid-cols-2">
      <dt class="font-bold">Capital:</dt>
      <dd>{capital}</dd>
      <dt class="font-bold">Region:</dt>
      <dd>{region}</dd>
      <dt class="font-bold">Population:</dt>
      <dd>{population}</dd>
    </dl>
  </div>
</a>
