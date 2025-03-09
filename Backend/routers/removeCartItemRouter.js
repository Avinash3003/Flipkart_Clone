import express from 'express'
import { removeCartItemController } from '../controllers/removeCartItemController.js';

export const removeCartItemRouter=express.Router();

removeCartItemRouter.post('/removeitem',removeCartItemController)

