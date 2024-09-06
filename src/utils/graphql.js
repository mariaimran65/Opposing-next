class GraphQLClient {
  constructor({ url }) {
    this.url = url;
  }

  query({ query, variables, headers }) {
    return new Promise((resolve, reject) => {
      console.log('url is ', this.url);
      fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        body: JSON.stringify({ query, variables })
      })
        .then((res) => res.json().then(resolve).catch(reject))
        .catch(reject);
    });
  }
}

export const graphqlClient = new GraphQLClient({
  url: `${process.env.NEXT_PUBLIC_API_URI}`
});

export function stripGraphQLTypes(input) {
  if (!input) return input;
  return JSON.parse(JSON.stringify(input), (key, value) =>
    key === '__typename' ? undefined : value
  );
}
