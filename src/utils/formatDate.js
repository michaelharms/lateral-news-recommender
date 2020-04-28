const options = {
  year: "2-digit",
  month: "short",
  day: "numeric",
};

/**
 * Formats ISO-8601 into readable form.
 * @param {string} date - A valid ISO-8601 date as string
 */
function formatDate(date) {
  return new Date(date).toLocaleString("de-DE", options);
}

export default formatDate;
