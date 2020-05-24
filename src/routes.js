 
import { Router } from 'express';
import MedicineController from './app/controllers/MedicineController.js';

const routes = new Router();

routes.post('/medicine', MedicineController.store);

export default routes;