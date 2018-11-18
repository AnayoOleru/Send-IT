import { Router } from 'express';
import User from '../controllers/userController';

const router = Router();
const { getUsers, createUser, userParcels } = User;

router
  .route('/users')
  .get(getUsers)
  .post(createUser);

// router
//   .route('parcels/:userId/parcels')
//   .get(userParcels);

export default router;
