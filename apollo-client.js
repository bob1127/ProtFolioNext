// apollo-client.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://your-wordpress-site.com/graphql', // 替換成你的 WordPress GraphQL API URL
  cache: new InMemoryCache(),
});

export default client;
