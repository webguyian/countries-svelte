import { API_BASE_URL } from '$lib/const';

export async function load({ fetch, params }) {
  const endpoint = `${API_BASE_URL}/alpha/${params.id}`;
  const response = await fetch(endpoint).then((res) => res.json());
  const country = response?.[0];
  let borderCountries = {};

  if (country.borders) {
    const borderResponse = await fetch(
      `${API_BASE_URL}/alpha?codes=${country.borders.join()}&fields=name,cca3`
    ).then((res) => res.json());
    borderCountries = borderResponse.reduce((acc, cur) => {
      acc[cur.cca3] = cur.name.common;
      return acc;
    }, {});
  }

  return {
    borderCountries,
    country
  };
}
