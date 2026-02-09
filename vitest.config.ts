import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // allows using global test functions like describe/it
    environment: "jsdom", // React DOM environment
    include: ["ui-features/**/*.{test,spec}.{ts,tsx}"], // test files pattern
    coverage: {
      provider: "istanbul", // coverage provider
      reporter: ["text", "json", "html"], // coverage reports
    },
  },
});
