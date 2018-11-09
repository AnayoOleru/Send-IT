const express = require('express');
const users = require('../controllers/userController');

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
module.exports = router;
