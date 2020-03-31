const knex = require('knex');
const configuration = require('../../knexfile')

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

// we need a different connection in case we are in test environment
const connection = knex(config);

module.exports = connection;
