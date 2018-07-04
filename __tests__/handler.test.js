const handler = require('../handler');

test('correct greeting is generated', () => {
  expect(handler.getLocalGreeting("en")).toBe("Hello!");
  expect(handler.getLocalGreeting("fr")).toBe("👋");
});
