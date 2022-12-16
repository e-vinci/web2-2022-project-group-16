const express = require('express');
const { win,lose, numberGamePlayer, sortPlayer} = require('../models/score');


const router = express.Router();

router.patch('/winGame',(req,res) => {
    const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
    // if (!username) return res.sendStatus(400); // 400 Bad Reques
      const player = win(username);
      return res.json(player)
  });

  router.post('/loseGame',(req,res) => {
    const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
    if (!username) return res.sendStatus(400); // 400 Bad Reques
      const player = lose(username);
      return res.json(player)
  });

  router.post('/numberGame',(req,res) => {
    const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
    if (!username) return res.sendStatus(400); // 400 Bad Reques
      const player = numberGamePlayer(username);
      return res.json(player)
  });

  router.get('/listOrder',(req,res) => {
    const order = sortPlayer()
      return res.json(order)
  });

module.exports = router;