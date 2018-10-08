var express = require('express');
var models = require('../models');
var bp = require('body-parser');
var router = express.Router();
var User = models.User;

router.use(bp.json());

router.post('', function(req, res) {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  }).then(function(user) {
    res.json(user);
  });
});

router.get('/:id', function(req, res) {
  User
    .findById(req.params.id)
    .then(function(user) {
      res.json(user);
    });
});

module.exports = router;
