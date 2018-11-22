
import moment from 'moment';
import uuidv4 from 'uuidv4';
import db from '../databaseConnection/dbconnection';


/**
 * @exports
 * @class parcelController
*/
class ParcelController {
  /**
   * Get All Parcels
   * @param {object} req
   * @param {object} res
   * @returns {object} reflections array
   */
  static async getAllParcels(req, res) {
    const findAllQuery = 'SELECT * FROM parcel_db';
    try {
      const { rows, rowCount } = await db(findAllQuery);
      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  /**
   * get parcel by id
   * @param {object} req
   * @param {object} res
   * @returns {object}
  */
  static async getParcelById(req, res) {
    const { parcelId } = req.params;
    const text = 'SELECT * FROM parcel_db WHERE id = $1';
    try {
      const { rows } = await db(text, [parcelId]);
      if (!rows[0]) {
        return res.status(404).send({ message: 'parcels not found' });
      }
      return res.status(200).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  /**
   * static method: Create A Parcel_db
   * @param {object} req
   * @param {object} res
   * @returns {object} reflection object
   */
  static async createParcel(req, res) {
    const text = `INSERT INTO
      parcel_db(user_id, parcel_id, name_of_item, destination, sendee_name, sendee_phone_number, city_or_town, LGA, 
        pickup_location, security_question, parcel_weight, answer, date_created, status)
      VALUES($1, $2, $3, $4, $5, $6, $7, &8, &9, &10, $11, $12, $13)
      returning *`;
    const values = [
      uuidv4(),
      req.body.nameOfItem,
      req.body.destination,
      req.body.sendeeName,
      req.body.sendeePhoneNumber,
      req.body.cityOrTown,
      req.body.LGA,
      req.body.pickupLocation,
      req.body.securityQuestion,
      req.body.parcelWeight,
      req.body.answer,
      moment(new Date()),
      'processing',
    ];

    try {
      const { rows } = await db(text, values);
      return res.status(201).send({
        status: 201,
        data: [{
          message: 'parcel created',
          order: rows[0],
        }]
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  }


  /**
   *@staticmethod
   * @param {object} req - Request parcel id
   * @param {object} res - Respond object
   * @returns{string} - Returns status string
   */
  static async cancelParcel(req, res) {
    const { parcelId } = req.params;
    const text1 = 'SELECT * FROM parcel_db WHERE id = $1';
    const text = 'UPDATE parcel_db SET status=\'cancelled\' WHERE id = $1 RETURNING *';

    try {
      const { rows: result } = await db(text, [parcelId]);
      if (result[0].status !== 'processing') {
        return res.status(401).send({
          success: false,
          message: 'You cannot change status',
        });
      }
      const { rows } = await db(text, [parcelId]);
      res.status(200).send({
        success: true,
        orders: rows[0],
      });
    } catch (error) {
      return res.status(400).send({
        status: false,
        message: 'Parcel order not found',
      });
    }

    let parcelStatus;
    // eslint-disable-next-line no-undef
    parcel_id.forEach((parcel) => {
      if (parcel.parcelId === parcelId) {
        parcel.status = 'cancelled';
        parcelStatus = parcel;
      }
    });

    return res.status(200).json(parcelStatus);
  }
}

export default ParcelController;
