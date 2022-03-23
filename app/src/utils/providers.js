import {
  createApolloErrorProvider,
  createApolloLoadingProvider,
  createApolloMockedProvider,
} from "apollo-mocked-provider";
import { InMemoryCache } from "@apollo/client";
import { typeDefs } from "./typeDefs";

const cache = new InMemoryCache();

export const ApolloMockedProvider = createApolloMockedProvider(typeDefs, cache);
export const ApolloErrorProvider = createApolloErrorProvider(cache);
export const ApolloLoadingProvider = createApolloLoadingProvider(cache);
