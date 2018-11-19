import { express } from 'express';
import users from '../controllers/userController';

const router = express.Router();
const { getUsers, createUser, userParcels } = users;

router
  .route('/users')
  .get(getUsers)
  .post(createUser);

router
  .route('/:userId/parcels')
  .get(userParcels);
// export default router;
export default router;