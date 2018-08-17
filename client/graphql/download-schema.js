const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const fetch = require('node-fetch');
const {
  getIntrospectionQuery,
  buildClientSchema,
  printSchema,
} = require('graphql');
const pWaterfall = require('p-waterfall');

const endpoint = 'http://localhost:8082/graphql';

const fetchTask = () =>
  fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getIntrospectionQuery(),
    }),
  }).then(response => {
    return response.json();
  });

const buildSchemaTask = ({ data }) => {
  // your p-waterfall task can return plain object with no problems
  const schema = buildClientSchema(data);
  return printSchema(schema);
};

const writeSchemaTask = schema =>
  new Promise((resolve, rej) => {
    fs.writeFile(path.join(__dirname, './schema.graphql'), schema, err => {
      if (err) {
        rej(err);
      }
      resolve();
    });
  });

pWaterfall([fetchTask, buildSchemaTask, writeSchemaTask])
  .then(() => {
    console.log(
      chalk.green('schema.graphql has been successfully downloaded...')
    );
  })
  .catch(err => console.error(chalk.red(err)));
