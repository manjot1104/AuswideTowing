#!/usr/bin/env node
/**
 * Backend-only start script for Render deployment
 * This ensures only the Express server runs, not Next.js
 */

// Set NODE_ENV to production if not set
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production'
}

// Only require and start the Express server
require('./server/index.js')
