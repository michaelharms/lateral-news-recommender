import request from "./";

describe("request", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns data for successful requests", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(
        () => new Response('{ "test": "successful" }', { status: 200 })
      );

    const [data, error] = await request("https://google.de", {
      method: "GET",
    });
    expect(data.test).toBe("successful");
    expect(error).toBeFalsy();
  });

  it("handles HTTP errors", async () => {
    const errorCodes = [404, 401, 500, 504];

    errorCodes.forEach(async (status) => {
      jest
        .spyOn(global, "fetch")
        .mockImplementation(() => new Response("", { status }));

      const [data, error] = await request("https://google.de", {
        method: "GET",
      });
      expect(data).toBeFalsy();
      expect(error).toBeTruthy();
    });
  });
});
