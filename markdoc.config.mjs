import { defineMarkdocConfig } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  variables: {
    environment: process.env.IS_PROD ? 'prod' : 'dev',
  },
});