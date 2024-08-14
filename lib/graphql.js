export async function fetchAllPostsSlugs() {
  const res = await fetch('https://blog.ultraehp.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query AllPosts {
          posts {
            edges {
              node {
                slug
              }
            }
          }
        }
      `,
    }),
  });

  const json = await res.json();
  return json.data.posts.edges.map(edge => edge.node);
}
