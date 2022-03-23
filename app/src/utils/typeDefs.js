export const typeDefs = `
type Query {
  articles(title: String): [Article]
}

type Article {
  source: Source
  author: String
  title: String
  description: String
  url: String
  urlToImage: String
  publishedAt: String
  content: String
}

type Source {
  id: String
  name: String
}
`