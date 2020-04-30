import React, { useState, Suspense } from "react";
import { GlobalStyle } from "./styles/global";
import Input from "./components/Input";
import Button from "./components/Button";
import Logo from "./components/Logo";
import Spinner from "./components/Spinner";
import newsAPI from "./api/news";
import styled from "styled-components";
import { space } from "styled-system";
import ErrorMessage from "./components/ErrorMessage";

// do not load until needed
const SimilarArticles = React.lazy(() =>
  import("./components/SimilarArticles")
);

const FlexRow = styled.div`
  ${space}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

/**
 * Main App
 */
function App() {
  // Input State
  const [url, setUrl] = useState("");
  const [inputError, setInputError] = useState("");
  // Request State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // Articles data state
  const [extractedArticle, setExtractedArticle] = useState("");
  const [similarArticles, setSimilarArticles] = useState([]);

  /**
   * Validate URL input and start API request
   */
  function handleExtractClick() {
    setError("");

    // https://stackoverflow.com/a/3809435/11939354
    const pattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
    const regex = new RegExp(pattern);

    if (!url) {
      setInputError("Please enter a URL");
    } else if (!url.match(regex)) {
      setInputError("Not a valid URL");
    } else {
      getSimilarArticles();
    }
  }

  /**
   * Update URL input state
   */
  function handleInputChange(event) {
    setInputError("");
    setUrl(event.target.value);
  }

  /**
   * Handling API requests for article extraction
   * and fetching of similar articles
   */
  async function getSimilarArticles() {
    setLoading(true);
    setError("");
    setExtractedArticle("");
    setSimilarArticles([]);

    const [extractResult, extractError] = await newsAPI.extractArticle(url);

    if (extractError) {
      setError(extractError.message);
    } else {
      setExtractedArticle(extractResult.body);
      const [similarResult, similarError] = await newsAPI.findSimilarArticles(
        extractResult.body
      );

      if (similarError) {
        setError(similarError.message);
      } else {
        setSimilarArticles(similarResult);
      }
    }

    setLoading(false);
  }

  return (
    <>
      <GlobalStyle />
      <Logo />
      <h1>News Recommender</h1>
      <p>
        Enter the URL of a news article from the web below to get
        recommendations for similar articles.
      </p>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        id="url"
        label="URL"
        placeholder="https://www.nytimes.com/column/learning-article-of-the-day"
        value={url}
        onChange={handleInputChange}
        error={inputError}
      />
      <FlexRow mt={4}>
        {loading && <Spinner />}
        <Button onClick={handleExtractClick} disabled={loading}>
          Find similar articles
        </Button>
      </FlexRow>

      {extractedArticle && !loading && (
        <Suspense fallback={null}>
          <SimilarArticles articles={similarArticles} />
        </Suspense>
      )}
    </>
  );
}

export default App;
