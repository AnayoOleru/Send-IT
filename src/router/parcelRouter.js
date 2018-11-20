import { Router } from 'express';
import ParcelController from '../controllers/parcelController';


const router = Router();
const {
  getParcels, createParcel, getParcelById, cancelParcel
} = ParcelController;

// localhost3000/api/v1/parcels
router
  .route('/')
  .get(getParcels)
  .post(createParcel);

// localhost 3000/api/v1/parcels/12345/cancel
router
  .route('/:parcelId/cancel')
  .put(cancelParcel);

// localhost 3000/api/v1/parcels/12345
router
  .route('/:parcelId')
  .get(getParcelById);

export default router;