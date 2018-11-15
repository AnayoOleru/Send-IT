import { Router } from 'express';
// import parcels from '../controllers/parcelController';
const parcels = require('../controllers/parcelController');

const router = Router();
const {
  getParcels, createParcel, getParcelById, cancelParcel
} = parcels;
// import the logic from parcelcontroller and ...
// fetch all parcel delivery orders
// create delivery new delivery
router
  .route('')
  .get(getParcels)
  .post(createParcel);

// cancel the specific parcel delivery order
router
  .route('/:parcelId/cancel')
  .put(cancelParcel);

//
router
  .route('/:parcelId')
  .get(getParcelById);

// export default router;
export default router;
