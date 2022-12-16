const express = require('express');
const { register , login , allPlayer} = require('../models/users');


const router = express.Router();

router.get('/get', (req,res) => {
  console.log("ICI")
  const truc = allPlayer();
  return res.json(truc);
});

router.post('/register',(req,res) => {
  console.log("je suis la")
    const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
    const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

    if (!username || !password) return res.sendStatus(400); // 400 Bad Request

  const authenticatedUser = register(username, password);

  if (!authenticatedUser) return res.sendStatus(409); // 409 Conflict

  return res.json(authenticatedUser);
});

router.post('/login', (req, res) => {
  console.log("je suis PAS la")
    const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
    const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;
  
    if (!username || !password) return res.sendStatus(400); // 400 Bad Reques
  
    const authenticatedUser = login(username, password);
  
    if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized
      
    return res.json(authenticatedUser);
  });

  

  module.exports = router;