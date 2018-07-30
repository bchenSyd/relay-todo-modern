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

const endpoint = 'http://localhost:8082';

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

const buildSchemaTask = ({ data }) =>
  new Promise(resolve => {
    const schema = buildClientSchema(data);
    resolve(printSchema(schema));
  });

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
