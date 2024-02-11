import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        coverage: {
            include: ["src/**/*"],
            extension: ["ts", "tsx"],
            exclude: ["src/main.tsx"]
        }
    }
})

