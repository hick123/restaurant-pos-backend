import express from 'express';
import router from './routes';
import Responses from './utils/response';
import bodyParser from 'body-parser';
import path from 'path';
import chalk from 'chalk';
// import cors from 'cors';

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('uploads'));
// app.use(cors());

app.get('/', (req, res) => Responses.handleSuccess(200, 'Welcome to restaurant-pos', res));

app.use(router);

if (!module.parent) {
  app.listen(PORT, (err) => {
    if (err) {
      console.log(chalk.red('Cannot run!'));
    } else {
      console.log(chalk.green.blueBright(`Server listening on port: ${PORT}`));
    }
  });
}
