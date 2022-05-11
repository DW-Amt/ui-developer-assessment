module.exports = {
    // root of source code
    roots: ["<rootDir>/src"],
    // using ts-jest
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },

    // Cleans up after components and adds extra extentions to jest
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect"
    ],

    // The pattern or patterns Jest uses to detect test files
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

    // Module file extensions for importing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};