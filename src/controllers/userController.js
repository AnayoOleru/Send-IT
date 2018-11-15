import { randomBytes } from 'crypto';
import users from '../db/users';
import parcels from '../db/parcel';

class userController {
  // logic to get all users
  getUsers(req, res) {
    return res.json(users);
  },
  // gets all parcels under specific user
  userParcels(req, res) { return res.json(parcels); },

  createUser(req, res) {
    const { name = '', email, password } = req.body;
    // if email is not available
    if (!email || !password) {
      return res
        .status(401)
        .json({ error: { message: 'Email and password are required to signup.' } });
    }
    // checks if email is available
    // const emailAvaiable = Object.entries(users).every(([val]) => val.email !== email);

    // if (!emailAvaiable) return res.status(409)
    // .json({ error: { message: 'Email is already registered.' } });

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
};
