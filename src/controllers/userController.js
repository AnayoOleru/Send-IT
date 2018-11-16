import { randomBytes } from 'crypto';
import users from '../db/users';

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
    return res.json(users);
  }

  /**
   * @staticmethod
   * @param {object} req - Request Object
   * @param {object} res - Response Object
   * @returns {object} - Returns status code
   */
  static createUser(req, res) {
    const { name = '', email, password } = req.body;
    if (!email || !password) {
      return res
        .status(401)
        .json({ error: { message: 'Email and password are required to signup.' } });
    }

    const randomId = randomBytes(4).toString('hex');
    const newUser = {
      id: randomId,
      name,
      password,
      email,
    };

    users[randomId] = newUser;
    res.status(201).json(newUser);
  }
}

export default UserController;
