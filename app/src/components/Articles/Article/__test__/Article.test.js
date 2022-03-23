import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Article from "..";

const testData = [
  {
    source: {
      id: null,
      name: "Youtube.com",
    },
    author: null,
    title:
      "Watch live: NASA to conduct historic first all-female spacewalk - Washington Post",
    description:
      "NASA astronauts Christina Koch and Jessica Meir walk outside the International Space Station to replace a damaged battery unit just months after NASA had to ...",
    url: "https://www.youtube.com/watch?v=KGRl_-wWMD0",
    urlToImage: "https://i.ytimg.com/vi/KGRl_-wWMD0/hqdefault_live.jpg",
    publishedAt: "2019-10-18T11:11:55Z",
    content:
      "NASA astronauts Christina Koch and Jessica Meir walk outside the International Space Station to replace a damaged battery unit just months after NASA had to cancel an all-female spacewalk because of a spacesuit-sizing problem. At a media briefing before the s… [+494 chars]",
  },
];

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Article article={testData[0]} readArticles={testData} />,
    div
  );
});

it("renders label inside search component correctly", () => {
  const { getByTestId } = render(
    <Article article={testData[0]} readArticles={testData} />
  );

  getByTestId("articleListTitle");
});

it("renders label inside search component correctly", () => {
  const { getByTestId } = render(
    <Article article={testData[0]} readArticles={testData} />
  );

  getByTestId("articleListSource");
});
