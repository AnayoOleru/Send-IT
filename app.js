import bodyParser from 'body-parser';
import express from 'express';
import users from './src/router/userRouter';
import parcels from './src/router/parcelRouter';

const app = express();
// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api/v1', users);
app.use('/api/v1/parcels', parcels);

app.get('*', (req, res) => {
  res.send('Hello-world');
});

app.listen(3000, () => {
  console.log('server started on port 3000...');
});
