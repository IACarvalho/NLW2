import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControler = new ClassesController();
const connectionController = new ConnectionController();

routes.get('/classes', classesControler.index);
routes.post('/classes', classesControler.create);

routes.get('/connections',connectionController.index );
routes.post('/connections',connectionController.create );

export default routes;
