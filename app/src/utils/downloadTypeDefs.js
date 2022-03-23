const { fetchTypeDefs } = require("apollo-mocked-provider");

(() => {
  fetchTypeDefs({ uri: "http://localhost:8000/graphql", typescript: false });
})();
