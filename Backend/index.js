const app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Backend server is ruing');
});
