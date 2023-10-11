module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react', 'react-refresh', 'simple-import-sort'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'return', next: '*' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: 'export', next: '*' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: 'if', next: '*' },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.tsx'],
      rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
      },
    },
  ],
};
