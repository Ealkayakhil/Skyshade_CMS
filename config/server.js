'use strict';

// Load env vars from .env file if it exists
const path = require('path');
const fs   = require('fs');

const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  require('dotenv').config({ path: envPath });
}

// Write .env from Hostinger env vars if DB vars are available
if (process.env.DATABASE_HOST && !fs.existsSync(envPath)) {
  const envContent = `
HOST=${process.env.HOST || '0.0.0.0'}
PORT=${process.env.PORT || 3000}
NODE_ENV=${process.env.NODE_ENV || 'production'}
APP_KEYS=${process.env.APP_KEYS || ''}
API_TOKEN_SALT=${process.env.API_TOKEN_SALT || ''}
ADMIN_JWT_SECRET=${process.env.ADMIN_JWT_SECRET || ''}
TRANSFER_TOKEN_SALT=${process.env.TRANSFER_TOKEN_SALT || ''}
JWT_SECRET=${process.env.JWT_SECRET || ''}
DATABASE_CLIENT=mysql2
DATABASE_HOST=${process.env.DATABASE_HOST}
DATABASE_PORT=${process.env.DATABASE_PORT || 3306}
DATABASE_NAME=${process.env.DATABASE_NAME}
DATABASE_USERNAME=${process.env.DATABASE_USERNAME}
DATABASE_PASSWORD=${process.env.DATABASE_PASSWORD}
DATABASE_SSL=false
STRAPI_TELEMETRY_DISABLED=true
PUBLIC_URL=${process.env.PUBLIC_URL || ''}
`.trim();
  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env created from Hostinger env vars');
}

const strapi = require('@strapi/strapi');
strapi({ dir: process.cwd() }).start();