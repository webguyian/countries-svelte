<script>
  import { CountryCard, SearchFilter } from '$lib';

  export let data;

  const onLoadMore = () => {
    page = page * 2;
    countries = data.allCountries.slice(0, page);
  };

  const filterByRegion = (country) => {
    return regionQuery ? country.region === regionQuery : country;
  };

  const filterBySearch = (country) => {
    return searchQuery
      ? country.name.common.toLowerCase().startsWith(searchQuery.toLowerCase())
      : country;
  };

  $: page = 12;
  $: regionQuery = data.regionQuery;
  $: searchQuery = data.searchQuery;
  $: filteredCountries = data.allCountries.filter(filterByRegion).filter(filterBySearch);
  $: countries = filteredCountries.slice(0, page);
  $: countryCount = filteredCountries.length ?? 0;
  $: showMore = countryCount > countries.length;
</script>

<div>
  <SearchFilter />
  <div class="grid grid-cols-fluid justify-items-center gap-10 mb-8">
    {#each countries as country}
      <CountryCard {country} />
    {/each}
  </div>
  {#if !countryCount}
    <p>No matching countries found.</p>
  {/if}
  {#if showMore}
    <button
      class="py-2.5 px-8 mb-4 text-base font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-700"
      type="button"
      on:click={onLoadMore}
    >
      Load more
    </button>
  {/if}
</div>
