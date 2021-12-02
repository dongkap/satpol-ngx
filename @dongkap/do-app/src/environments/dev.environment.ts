export const environment = {
  production: false,
  locale: 'id-ID',
  basePath: '/',
  host: {
    openapi: {
      protocol: 'http',
      host: 'localhost',
      port: 8082,
    },
    auth: {
      protocol: 'http',
      host: 'localhost',
      port: 8081,
    },
    security: {
      protocol: 'http',
      host: 'localhost',
      port: 8081,
    },
    profile: {
      protocol: 'http',
      host: 'localhost',
      port: 8081,
    },
    master: {
      protocol: 'http',
      host: 'localhost',
      port: 8082,
    },
    notification: {
      protocol: 'http',
      host: 'localhost',
      port: 8085,
    },
  },
};
