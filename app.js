import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import 'babel-polyfill';
import users from './src/router/userRouter';
import parcels from './src/router/parcelRouter';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api/v1/users', users);
app.use('/api/v1/parcels', parcels);
app.get('/api/v1', (req, res) => {
  res.send('I am Send-IT! Connection successful');
});

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Page Not Found. Go to /api/v1 to use this api' });
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => {
  console.log(`Node server is running on port ${app.get('port')}`);
});

export default app;
