const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[1];
  if (token==null) return res.status(401).send("Go back, you are not authorized.")
  
  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err, userId) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.userId = userId;
    next();
  });
};

module.exports = authenticate;
