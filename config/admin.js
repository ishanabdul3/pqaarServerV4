module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '60a4f8f7156c3449f00691cfba492074'),
  },
});
