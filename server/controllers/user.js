const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const db = req.app.get('db');
  const result = await db.user.find_user_by_email([email]);
  const existingUser = result[0];
  if(existingUser){
    return res.status(409).send('Email already in use, please sign in.');
  } else {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const registeredUser = await db.user.create_user([firstName, lastName, email, hash]);
    const user = registeredUser[0];
    req.session.user = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      id: user.id,
    };
    console.log(user)
    return res.status(201).send(user) ;
  }
}

const login = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const db = req.app.get('db');
  const user = await db.users.findOne({
    email,
  });
  if(!user){
    return res.status(401).send('User not found.  Please register as a new user before logging in')
  } 
  const isAuthenticated = bcrypt.compareSync(password, user.password)
  if(!isAuthenticated){
    return res.status(403).send('Incorrect password')
  } 
  req.session.user = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    id: user.id,
  };
    return res.send(req.session.user);
}

const logout = async (req, res) => {
  req.session.destroy();
  return res.sendStatus(200);
}

const getUser = async (req, res) => {
  try {
    if(req.session.user) {
      return res.send(user);
    } else (
      res.sendStatus(404)
    );
  } catch (error) {
    console.error("Error getting User", error);
  }
  
}

module.exports = {
  register,
  login,
  logout,
  getUser,
}