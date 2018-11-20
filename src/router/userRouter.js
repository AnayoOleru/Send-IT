
import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();
const { getUsers, createUser, userParcels } = UserController;

router
  .route('/')
  .get(getUsers)
  .post(createUser);
router
  .route('/:userId/parcels')
  .get(userParcels);


export default router;