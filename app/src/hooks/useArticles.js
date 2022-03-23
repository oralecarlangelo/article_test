import { useQuery, gql } from "@apollo/client";
const GET_ARTICLES = gql`
  query articles($title: String) {
    articles(title: $title) {
      title
      source {
        id
        name
      }
      author
      description
      urlToImage
      url
      publishedAt
      content
    }
  }
`;

export const useArticles = ({ title }) => {
  const { loading, error, data, refetch } = useQuery(GET_ARTICLES, {
    variables: {
      title: title,
    },
  });
  return {
    error,
    data,
    loading,
    refetch,
  };
};
