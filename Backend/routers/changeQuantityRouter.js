import express from 'express'
import { changeQuantityController } from '../controllers/changeQuantityController.js';

export const changeQuantityRouter=express.Router();

changeQuantityRouter.post('/changequantity',changeQuantityController)