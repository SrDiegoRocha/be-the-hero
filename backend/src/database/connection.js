const knex = require('knex');
const configuration = require('../../knexfile');

// se a gente executar npm test, o banco vai ser o de teste e o contrário é o contrário
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;

// npm install cross-env // esse carinha vai te ajudar a saber se vc vai uar o db pra teste ou pra desenvolvimento