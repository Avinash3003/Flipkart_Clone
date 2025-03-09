import express from 'express'
import { cartDataRetrieve } from '../controllers/cartDataRetrieve.js';

export const cartDataRetrieveRoute=express.Router();

cartDataRetrieveRoute.post('/cartdata',cartDataRetrieve)














