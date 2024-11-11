const { NEXT_PUBLIC_STRAPI_HOST, NEXT_PUBLIC_STRAPI_TOKEN, NEXT_PUBLIC_PYTHON_HOST, NEXT_PUBLIC_PYTHON_TOKEN } =
  process.env;

export const queryStrapi = async (url: string) => {
  const res = await fetch(`${NEXT_PUBLIC_STRAPI_HOST}/${url}`, {
    // method: "GET",
    headers: {
      Authorization: `Bearer ${NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
    next: {
      revalidate: 10,
    },
  });
  return await res.json();
};

export const queryPython = async (url: string) => {
  const res = await fetch(`${NEXT_PUBLIC_PYTHON_HOST}/${url}`, {
    // method: "GET",
    headers: {
      Authorization: `Bearer ${NEXT_PUBLIC_PYTHON_TOKEN}`,
    },
    next: {
      revalidate: 10,
    },
  });
  return await res.json();
};
