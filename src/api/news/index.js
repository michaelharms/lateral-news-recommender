import request from "../../utils/request";

export default {
  /**
   * Request for extracting an article from the web
   * @param {string} url - URL to extract an article from
   */
  async extractArticle(url) {
    const [article, error] = await request(
      `https://document-parser-api.lateral.io/?url=${url}`,
      {
        method: "GET",
      }
    );

    return { article, error };
  },
  /**
   * Request for finding similar news articles
   * @param {string} text - Input for similarity prediction
   */
  async findSimilarArticles(text) {
    const [articles, error] = await request(
      "https://news-api.lateral.io/documents/similar-to-text",
      {
        method: "POST",
        body: {
          text,
        },
      }
    );

    return { articles, error };
  },
};
