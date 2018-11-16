import { randomBytes } from 'crypto';
import parcels from '../db/parcel';
/**
 * @exports
 * @class parcelController
*/
class ParcelController {
  /**
   * @staticmethod
   * @param {object} req - Request Object
   * @param {object} res - Response Object
   * @returns {object} - Returns all parcels object
   */
  static getParcels(req, res) { return res.json(parcels); }

  /**
 *
 * @staticmethod
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @returns {object} - Returns a specific parcel object
 */
  static getParcelById(req, res) {
    const { parcelId } = req.params;
    return res.json(parcels[parcelId]);
  }

  /**
   *
   * @staticmethod
   * @param {object} req - Request object
   * @param {object} res - respond object
   * @returns {object} - returns all parcel object for a specific user
   */
  static userParcels(req, res) { return res.json(parcels); }

  /**
   *
   * @staticmethod
   * @param {values} req - Request values into keys
   * @param {object} res - Respond object
   * @returns {object} - returns all key value pairs as object
   */
  static createParcel(req, res) {
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
  }

  /**
   *@staticmethod
   * @param {object} req - Request parcel id
   * @param {object} res - Respond object
   * @returns{object} - Returns array
   */
  static cancelParcel(req, res) {
    const parcel = parcels;
    const { parcelId } = req.params;

    parcel[parcelId].status = 'cancelled';

    res.json(parcels[parcelId]);
  }
}

export default ParcelController;
