'use strict';

var _bodyParser = require('body-parser');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userRouter = require('./src/router/userRouter');

var _userRouter2 = _interopRequireDefault(_userRouter);

var _parcelRouter = require('./src/router/parcelRouter');

var _parcelRouter2 = _interopRequireDefault(_parcelRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// middlewares
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));

app.use('/api/v1/users', _userRouter2.default);
app.use('/api/v1/parcels', _parcelRouter2.default);

app.get('*', function (req, res) {
  res.send('Hello-world');
});

app.set('port', process.env.PORT || 3000);

// Start node server
app.listen(app.get('port'), function () {
  console.log('Node server is running on port ' + app.get('port'));
});