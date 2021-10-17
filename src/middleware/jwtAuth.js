const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const domain = 'dev-2lqrq6ye.eu.auth0.com';
const audience = 'https://hmtq9bof5f.execute-api.eu-west-2.amazonaws.com';

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`,
  }),

  audience: audience,
  issuer: `https://${domain}/`,
  algorithms: ["RS256"],
});

module.exports = checkJwt;