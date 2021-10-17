const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const audience = 'https://hmtq9bof5f.execute-api.eu-west-2.amazonaws.com';

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),

  audience: audience,
  issuer: process.env.AUTH0_DOMAIN,
  algorithms: ["RS256"],
});

module.exports = checkJwt;