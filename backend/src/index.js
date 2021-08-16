require('dotenv').config();
const config = require('config');
const logger = require('./config/logger');
const app = require('./server');
const port = process.env.PORT || 3000;
mongoose.Promise = global.Promise;


const connectionString =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mcfhb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const options = {
  useNewUrlParser: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

//Database connection.
if (!config.has('database')) {
    logger.error('No database config found.');
    process.exit();
}

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

mongoose.connect(connectionString, options)
  .then(() => logger.info('MongoDB connection has been established successfully.'))
  .catch(err => {
    logger.error(err);
    process.exit(-1);
  });

const app = require('./server');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
