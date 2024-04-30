import express, { json, urlencoded } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { NotFoundError } from './errors';
import { errorHandler } from './middlewares';
import { routes } from './routes/routes';


const app = express();

app.use(cors());
app.use(json({ limit: '20mb' }));

app.use(urlencoded({ limit: '20mb', extended: true }));

routes(app)


app.use(errorHandler)
export { app }