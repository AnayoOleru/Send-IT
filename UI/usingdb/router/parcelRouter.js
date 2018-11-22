import { Router } from 'express';
import Parcel from '../controllers/parcels';

const router = Router();


router.post('/api/v1/parcels', Parcel.createParcel);
router.get('/api/v1/parcels', Parcel.getAllParcels);
router.get('/api/v1/parcels/:id', Parcel.getParcelById);
