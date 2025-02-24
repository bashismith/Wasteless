const models = require('./UserModel');
const UserController = {};

UserController.signup = (req, res, next) => {
  console.log('we in signup controller');
  const { username, password } = req.body;


  models.User.create({ username, password})
  .then(() => {
  return next();
  })
  .catch((err) =>
  next({
    log: `UserController.signup: ERROR: ${err}`,
    message: {
      err: 'Error occurred in UserController.signup. Check server logs for more details.',
    },
  }));
  };

UserController.login = (req, res, next) => {
  console.log('we in login controller');
  const { username, password } = req.body;

    models.User.findOne({ username, password})
    .then((data) => {
      console.log('We\'re in login')
      res.locals.user = data.user;
      console.log('(dingus.user) data.user', typeof data.user);
      return next();
    })
    .catch((err)=>
    next({
        log:`UserController.login: ERROR: ${err}`,
        message:{
            err: 'Error: Invalid Credentials '
        }
    })
  )
};

// UserController.setCookie =(req, res, next) => {
//   console.log('we made it to cookie');
//   res.cookie('user', data.user);
//   return next();
// }

//Cookie will never be invoked, the routing for the cookie above has been removed


module.exports = UserController;