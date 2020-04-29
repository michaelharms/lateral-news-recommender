import formatDate from "./";

test("localizes and formats date", () => {
  expect(formatDate("2015-04-25T12:00:00Z")).toBe("25. Apr. 15");
  expect(formatDate("2020-12-01T13:53:01Z")).toBe("1. Dez. 20");
  expect(formatDate("2019-05-20T00:00:00Z")).toBe("20. Mai 19");
});
