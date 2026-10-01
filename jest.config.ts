import type { Config } from "jest";
import nextJest from "next/jest.js";

// next/jest wires Jest up to Next.js's compiler, loads next.config.ts and
// .env files, ignores .next/, and stubs out CSS imports.
const createJestConfig = nextJest({ dir: "./"});

const config: Config = {
    // Library tests need no browser, so node is the right default.
    // Component tests opt in to jsdom with a docblock.
    testEnvironment: "node",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

// next/jest builds the final config asynchronously, so it's exported this way
export default createJestConfig(config);