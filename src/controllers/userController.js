import { randomBytes } from 'crypto';
import userDb from '../db/users';
import parcelOrderDb from '../db/parcel';

/**
 * @exports
 * @class userController
*/
class UserController {
  /**
   * @staticmethod
   * @param {object} req - Request Object
   * @param {object} res - Response Object
   * @returns {object} - Returns all parcels object
   */
  static getUsers(req, res) {
    return res.status(200).json(userDb);
  }

  /**
   *
   * @staticmethod
   * @param {values} req - Request values into keys
   * @param {object} res - Push newUser into array
   * @returns {array} - returns all key value pairs as object in array
   */
  static createUser(req, res) {
    const {
      name,
      email,
      password
    } = req.body;
    const newUserId = randomBytes(5).toString('hex');

    userDb.push({
      id: newUserId,
      name,
      email,
      password
    });

    return res.status(201).json({ userDb });
  }


  /**
   *
   * @staticmethod
   * @param {object} req - Request object
   * @param {object} res - respond object
   * @returns {object} - returns all parcel object for a specific user
   */
  static userParcels(req, res) {
    const { userId } = req.params;
    let userParcels;
    parcelOrderDb.forEach((parcels) => {
      if (parcels.id === userId) {
        userParcels = parcels;
        return res.status(200).json(userParcels);
      }
    });
  }
}

export default UserController;