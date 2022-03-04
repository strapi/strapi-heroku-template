module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7396046a9eed089e536d31beff252071'),
  },
});
