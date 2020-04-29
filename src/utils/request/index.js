import { AuthError, NotFoundError, ServerError, HTTPError } from "./errors";

// use API key from environment variable
const HEADERS = new Headers({
  "subscription-key": process.env.REACT_APP_LATERAL_KEY,
});

/**
 * Universal Requests with Error Handling
 * @param {string} url - The url the request is directed at
 * @param {Object} options - Options for the request
 * @param {string} options.method - Request method
 * @param {Object} options.body - Optional body data for request
 */
async function request(url, { method = "GET", body = null }) {
  let data, error;

  const options = {
    method,
    headers: HEADERS,
  };

  if (body) options.body = new URLSearchParams(body);

  try {
    const response = await fetch(url, options);

    // Convert HTTP errors into user-friendly error messages
    if (response.status === 404) {
      throw new NotFoundError();
    } else if (response.status === 401) {
      throw new AuthError();
    } else if (response.status === 500) {
      throw new ServerError();
    } else if (response.status > 200) {
      throw new HTTPError();
    }

    data = await response.json();
  } catch (err) {
    error = err;
  }

  return [data, error];
}

export default request;
