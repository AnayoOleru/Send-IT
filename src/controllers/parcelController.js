import uuidv4 from 'uuidv4';
import db from '../databaseConnection/dbconnection';


/**
 * @exports
 * @class parcelController
*/
class ParcelController {
  /**
   * Static method: Gettng all Parcels
   * @param {object} req
   * @param {object} res
   * @returns {object}
   */
  static async getAllParcels(req, res) {
    const findAllParcels = 'SELECT * FROM parcel_table';
    try {
      const { rows, rowCount } = await db(findAllParcels);
      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  /**
   * Static method: Get parcel by id
   * @param {object} req
   * @param {object} res
   * @returns {object}
  */
  static async getParcelById(req, res) {
    const { parcelId } = req.params;
    const text = 'SELECT * FROM parcel_table WHERE id = $1';
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
    // console.log(uuidv4())
    console.log(req.body)
    const text = `INSERT INTO parcel_table(user_id, name_of_item, destination,
        sendee_name, sendee_phone_number, city_or_town, Lga,
        pickup_location, security_question, parcel_weight, answer, status)
      VALUES($1, $2, $3, $4, $5, $6, $7, &8, &9, &10, $11, $12)
      returning *`;
    const values = [
      uuidv4(),
      req.body.name_of_item,
      req.body.destination,
      req.body.sendee_name,
      req.body.sendee_phone_number,
      req.body.city_or_town,
      req.body.lga,
      req.body.pickup_location,
      req.body.security_question,
      req.body.parcel_weight,
      req.body.answer,
      req.body.status,
    ];

    try {
      // console.log(text, values);
      const { rows } = await db(text, values);
      return res.status(201).send(rows[0]);
    } catch (error) {
      console.log(error);
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
    const text = 'UPDATE parcel_table SET status=\'cancelled\' WHERE id = $1 RETURNING *';

    try {
      const { rows: result } = await db(text, [parcelId]);
      if (result[0].status !== 'processing') {
        return res.status(401).send({
          message: 'Status order not found',
        });
      }
      const { rows } = await db(text, [parcelId]);
      res.status(200).send({
        orders: rows[0],
      });
    } catch (error) {
      return res.status(400).send({
        message: 'No Parcel order found',
      });
    }

    // let parcelStatus;
    // parcel_id.forEach((parcel) => {
    //   if (parcel.parcelId === parcelId) {
    //     parcel.status = 'cancelled';
    //     parcelStatus = parcel;
    //   }
    // });

    // return res.status(200).json(parcelStatus);
  }
}

export default ParcelController;
