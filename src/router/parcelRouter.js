import express from 'express';
import parcels from '../controllers/parcelController';

const router = express.Router();
const {
  getParcels, createParcel, getParcelById, cancelParcel
} = parcels;
// router to fetch all parcel delivery orders
router
  .route('')
  .get(getParcels)
  .post(createParcel);
// route cancel the specific parcel delivery order
router
  .route('/:parcelId/cancel')
  .put(cancelParcel);

export default router;
