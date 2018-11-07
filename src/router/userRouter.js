import express from 'express';
import users from '../controllers/userController';

const router = express.Router();
const { getUsers, createUser } = users;

router
  .route('/users')
  .get(getUsers)
  .post(createUser);

export default router;
