import { randomBytes } from 'crypto';
import parcelOrderDb from '../db/parcel';
/**
 * @exports
 * @class parcelController
*/
class ParcelController {
  /**
   * @staticmethod
   * @param {object} req - Request Object
   * @param {object} res - Response Object
   * @returns {array} - Returns all parcels: Array of objects
   */
  static getParcels(req, res) {
    return res.status(200).json(parcelOrderDb);
  }

  /**
 *
 * @staticmethod
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @returns {object} - Returns a specific parcel object
 */
  static getParcelById(req, res) {
    const { parcelId } = req.params;
    let parcelObject;
    parcelOrderDb.forEach((parcel) => {
      if (parcel.id === parcelId) {
        parcelObject = parcel;
      }
    });

    return res.status(200).json(parcelObject);
  }

  /**
   *
   * @staticmethod
   * @param {values} req - Request values into keys
   * @param {object} res - Respond object
   * @returns {array} - returns all key value pairs as object in array
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
    const parcelId = randomBytes(5).toString('hex');

    parcelOrderDb.push({
      id: parcelId,
      userId,
      parcelWeight,
      price,
      departure,
      destination,
      pickupLocation,
      status: 'proccessing'
    });

    return res.status(201).json(parcelOrderDb);
  }

  /**
   *@staticmethod
   * @param {object} req - Request parcel id
   * @param {object} res - Respond object
   * @returns{string} - Returns status string
   */
  static cancelParcel(req, res) {
    const { parcelId } = req.params;


    let parcelStatus;
    parcelOrderDb.forEach((parcel) => {
      if (parcel.id === parcelId) {
        parcel.status = 'cancelled';
        parcelStatus = parcel;
      }
    });

    return res.status(200).json(parcelStatus);
  }
}

export default ParcelController;

