import { FlatCompat } from '@eslint/eslintrc';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const flatCompat = new FlatCompat();

export default {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@typescript-eslint', 'react'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier', // Make sure "prettier" is the last in the extends array
    ],
    rules: {
    // Your custom rules here
        'indent': ['error', 4],
        'react/prop-types': 'off', // Disable prop-types checking if you're using TypeScript
    // Add more custom rules as needed
    },
    settings: {
        react: {
            version: 'detect', // Automatically detect React version
        },
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            rules: {
                // TypeScript specific rules
                '@typescript-eslint/explicit-function-return-type': 'off', // Disable explicit return type for functions
                '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable explicit return types on functions and classes
            },
        },
    ],
};
