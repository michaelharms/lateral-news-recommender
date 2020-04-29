import React, { useState } from "react";
import { GlobalStyle } from "./styles/global";
import Input from "./components/Input";
import Button from "./components/Button";
import Logo from "./components/Logo";
import Spinner from "./components/Spinner";
import newsAPI from "./api/news";
import styled from "styled-components";
import { space } from "styled-system";
import ErrorMessage from "./components/ErrorMessage";

const FlexRow = styled.div`
  ${space}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Article = styled.div`
  margin: 1rem 0;
`;

/**
 * Main App
 */
function App() {
  const [url, setUrl] = useState("");
  const [inputError, setInputError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [article, setArticle] = useState("");

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
      extractArticle();
    }
  }

  /**
   * Update URL input value
   */
  function handleInputChange(event) {
    setInputError("");
    setUrl(event.target.value);
  }

  /**
   * Article Extraction API request handling
   */
  async function extractArticle() {
    setLoading(true);

    const { article, error } = await newsAPI.extractArticle(url);

    if (error) {
      setError(error.message);
    } else {
      setArticle(article.body);
    }

    setLoading(false);
  }

  return (
    <>
      <GlobalStyle />
      <Logo />
      <h1>News Recommender</h1>
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
          Extract
        </Button>
      </FlexRow>

      {article && <Article>{article}</Article>}
    </>
  );
}

export default App;
