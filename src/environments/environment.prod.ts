export const environment = {
  production: true,
  apiUrl: 'https://warrenclough.com:8443',
  auth: {
    clientID: 'YOUR-AUTH0-CLIENT-ID',
    domain: 'YOUR-AUTH0-DOMAIN', // e.g., you.auth0.com
    audience: 'YOUR-AUTH0-API-IDENTIFIER', // e.g., http://localhost:3001
    redirect: 'http://warrenclough.com/callback',
    scope: 'openid profile email'
  }
};
