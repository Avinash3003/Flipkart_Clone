import express from 'express'
import { cartDataController } from '../controllers/cartDataController.js';

export const cartDataRoute=express.Router();

cartDataRoute.post('/cartadd',cartDataController)