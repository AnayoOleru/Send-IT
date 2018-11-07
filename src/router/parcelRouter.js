import express from 'express';
import parcels from '../controllers/parcelController';

const router = express.Router();
const {
  getParcels, createParcel, getParcelById, cancelParcel
} = parcels;

router
  .route('')
  .get(getParcels)
  .post(createParcel);

router
  .route('/:parcelId/cancel')
  .put(cancelParcel);

export default router;
