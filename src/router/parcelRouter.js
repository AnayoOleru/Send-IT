import express from 'express';
import parcels from '../controllers/parcelController';

const router = express.Router();
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

export default router;
