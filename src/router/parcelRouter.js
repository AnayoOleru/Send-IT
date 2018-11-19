import { Router } from 'express';
import ParcelController from '../controllers/parcelController';


const router = Router();
const {
  getParcels, createParcel, getParcelById, cancelParcel
} = ParcelController;

router
  .route('/parcels')
  .get(getParcels)
  .post(createParcel);

router
  .route('/:parcelId')
  .put(cancelParcel);


router
  .route('/:parcelId')
  .get(getParcelById);

export default router;
