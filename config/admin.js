module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '40ca23bdc458f266577f3580e2f5549d'),
  },
});
