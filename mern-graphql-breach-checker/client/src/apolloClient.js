import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://breach-guard.onrender.com/graphql", // Adjust if your backend runs elsewhere
  cache: new InMemoryCache(),
});

export default client;
