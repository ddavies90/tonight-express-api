const AWS = require('aws-sdk');

exports.getFavourites = (req, res) => {
    const { sub: uid } = req.user;

    console.log(uid);

    res.status(200).send(uid);
}