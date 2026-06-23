'use strict';

// Don't load .env file — use Hostinger's injected env vars directly
process.env.STRAPI_DISABLE_UPDATE_NOTIFICATION = 'true';

const strapi = require('@strapi/strapi');
strapi({ dir: process.cwd() }).start();