import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

import middleware from './middlewares/middlewares';
import routes from './routes/routes'
// import handlers from './routes/handlers'

const port = process.env.PORT || 1337

// App instance variables
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../public')));

app.get('/', routes.details)
app.post('/validate-rule', routes.validateRule)

app.use(middleware.handleError);
app.use(middleware.notFound);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

export default app;
