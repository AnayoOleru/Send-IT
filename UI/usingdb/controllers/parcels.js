import { randomBytes } from 'crypto';
import db from '../db';

const Parcel = {
  /**
   * Create A Parcel_db
   * @param {object} req
   * @param {object} res
   * @returns {object} reflection object
   */
  async createParcel(req, res) {
    const text = `INSERT INTO
      parcel_db(userId, name_of_item, destination, sendee_name, sendee_phone_number, city_or_town, LGA, 
        pickup_location, security_question, parcel_weight, answer, status)
      VALUES($1, $2, $3, $4, $5, $6)
      returning *`;
    const values = [
      randomBytes(),
      req.body.name_of_item,
      req.body.destination,
      req.body.sendee_name,
      req.body.sendee_phone_number,
      req.body.city_or_town,
      req.body.LGA,
      req.body.pickup_location,
      req.body.security_question,
      req.body.parcel_weight,
      req.body.answer,
      req.body.status
    ];

    try {
      const { rows } = await db.query(text, values);
      return res.status(201).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get All Parcels
   * @param {object} req
   * @param {object} res
   * @returns {object} reflections array
   */
  async getAllParcels(req, res) {
    const findAllQuery = 'SELECT * FROM parcel_db';
    try {
      const { rows, rowCount } = await db.query(findAllQuery);
      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get A Parcel
   * @param {object} req
   * @param {object} res
   * @returns {object} reflection object
   */
  async getParcelById(req, res) {
    const text = 'SELECT * FROM parcel_db WHERE id = $1';
    try {
      const { rows } = await db.query(text, [req.params.id]);
      if (!rows[0]) {
        return res.status(404).send({ message: 'parcels not found' });
      }
      return res.status(200).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

export default Parcel;
