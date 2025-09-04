/** @type {import("prettier").Config} */
export default {
    semi: true,
    singleQuote: false,
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    trailingComma: "es5",
    arrowParens: "avoid",
    proseWrap: "preserve",
    endOfLine: "lf",
    insertFinalNewline: true,
    overrides: [
        {
            files: "*.js, *.jsx",
            options: {
                bracketSpacing: true,
            },
        },
        {
            files: "*.json",
            options: {
                tabWidth: 2,
            },
        },
    ],
};
