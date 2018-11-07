import { randomBytes } from 'crypto';
import parcels from '../db/parcel';

export default {
  getParcels(req, res) { return res.json(parcels); },

  getParcelById(req, res) { return res.json(req.parcel); },

  createParcel(req, res) {
    const {
      userId,
      parcelWeight,
      price,
      departure,
      destination,
      pickupLocation
    } = req.body;
    const parcelsDb = parcels;
    const parcelId = randomBytes(5).toString('hex');

    parcelsDb[parcelId] = {
      id: parcelId,
      userId,
      parcelWeight,
      price,
      departure,
      destination,
      pickupLocation,
      status: 'proccessing'
    };

    return res.status(201).json(parcelsDb);
  },

  cancelParcel(req, res) {
    const parcel = parcels;
    const { parcelId } = req.params;

    parcel[parcelId].status = 'cancelled';

    res.json(parcels[parcelId]);
  }

  // deleteParcel = (req, res) {
  //   const parcels = { ...parcels };

  //   delete parcels[req.parcel.id];
  //   parcels = parcels;

  //   res.json(req.parcel);
  // };
};
