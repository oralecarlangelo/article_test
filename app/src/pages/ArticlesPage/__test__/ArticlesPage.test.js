import React from "react";
import { render, cleanup } from "@testing-library/react";
import {
  ApolloLoadingProvider,
  ApolloMockedProvider,
  ApolloErrorProvider,
} from "../../../utils/providers";
import ArticlesPage from "..";

afterEach(cleanup);

test("Renders ArticlesPage Correctly", async () => {
  const { debug } = render(
    <ApolloMockedProvider>
      <ArticlesPage />
    </ApolloMockedProvider>
  );

  debug();
  await Promise.resolve();
  debug();
});
