
import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();
const { getUsers, createUser, getUserParcels } = UserController;
// localhost 3000/api/v1/users/
router
  .route('/')
  .get(getUsers)
  .post(createUser);
// localhost 3000/api/v1/users/1333/parcels
router
  .route('/:userId/parcels')
  .get(getUserParcels);


export default router;