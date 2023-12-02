import App from "./app";

describe("index", () => {
  let app: App;

  beforeEach(async () => {
    app = new App();
  });

  describe("app", () => {
    it("should start http server", async () => {
      expect(await app.start()).toBe("test");
    });
  });
});
