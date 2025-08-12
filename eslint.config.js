import openlayers from 'eslint-config-openlayers';

export default [
  ...openlayers,
  {
    name: 'test-config',
    files: ['test/**/*'],
    languageOptions: {
      globals: {
        after: 'readonly',
        afterEach: 'readonly',
        before: 'readonly',
        beforeEach: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        where: 'readonly',
      },
    },
  },
];
