import { API_BASE_URL } from '$lib/const';

export async function load({ fetch }) {
  const endpoint = `${API_BASE_URL}/all`;
  const response = await fetch(endpoint).then((res) => res.json());
  const allCountries = response.slice(0).sort((a, b) => a.name.common.localeCompare(b.name.common));

  return {
    allCountries
  };
}
