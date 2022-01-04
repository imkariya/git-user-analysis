import './loadEnvFile';
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import swaggerDocument from '../swagger.json';
import './db_connection/mongodb';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/api/v1/', routes);
app.use('/swagger-api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = 3003;
const server = app.listen(port, () => {
    console.log(`server started at http:/127.0.0.1:${port}`);
});

export default server;
