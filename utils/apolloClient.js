// lib/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://noozzule-demo.fly.dev/graphql', // Replace with your GraphQL endpoint
  }),
  cache: new InMemoryCache(),
});

export default client;
