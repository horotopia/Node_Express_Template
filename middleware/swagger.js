const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Minimal API Template with NodeJS & ExpressJS',
      version: '1.0.0',
      description:
        'This is a REST API application made with Express.',
      license: {
        name: 'Licensed Under MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Development server',
      },
    ],
};

const options = {
swaggerDefinition,
apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const swagger = [
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec),
];

module.exports = swagger;