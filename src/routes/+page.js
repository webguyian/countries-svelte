import { API_BASE_URL, REGION_KEY, SEARCH_KEY } from '$lib/const';

export async function load({ fetch, url }) {
  const endpoint = `${API_BASE_URL}/all`;
  const response = await fetch(endpoint).then((res) => res.json());
  const allCountries = response.slice(0).sort((a, b) => a.name.common.localeCompare(b.name.common));
  const searchQuery = url.searchParams.get(SEARCH_KEY);
  const regionQuery = url.searchParams.get(REGION_KEY);

  return {
    allCountries,
    regionQuery,
    searchQuery
  };
}
