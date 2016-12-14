// https://egghead.io/lessons/javascript-create-a-graphql-schema?play=yes
'use strict'

const { graphql, buildSchema } = require('graphql');

// Description of capabilities of graphql server
const schema = buildSchema(`
  type Schema {
    query: Query
  }
  type Query {
    foo: String
  }
`);

// Ma query
const query = `query myFirstQuery{ foo }`;

// a request
const resolvers = {
  foo: () => 'bar'
}

// Use graphql using schema, query and resolvers
graphql(schema, query, resolvers)
  .then(res => console.log(res))
  .catch(err => console.log(err))