'use strict';

/**
 * truck-status service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::truck-status.truck-status');
