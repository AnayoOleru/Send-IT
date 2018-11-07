import { randomBytes } from 'crypto';
import parcels from '../db/parcel';

export default {
  // created logic to get all parcel delivery for parcelrouter
  getParcels(req, res) { return res.json(parcels); },
  // logic to get specific parcel by id
  getParcelById(req, res) {
    const { parcelId } = req.params;
    res.json(parcels[parcelId]);
  },

  // created logic to create delivery orders
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

    // json start status for the PUT/parcels status
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
  // logic/continuation for PUT/parcels
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
