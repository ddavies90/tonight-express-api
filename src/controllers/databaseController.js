const db = require('../../resources/database');

exports.getFavourites = async (req, res) => {
    const { sub: uid } = req.user;
    console.log(uid)
    const params = {
        TableName: 'tonight-app-users',
        KeyConditionExpression: "#ID = :id",
        ExpressionAttributeNames: {
          "#ID": "ID"
        },
        ExpressionAttributeValues: {
            ":id": uid
        }
    };
    try {
        const data  = await db.query(params).promise();
        if (data.Count) {
            res.status(200).json(data);
        } else {
            res.status(404).json({
                error: 'No favourites returned from db'
            })
        }
    } catch(e) {
        console.log(e)
        res.status(500).json({
            error: e
        });
    };
};

exports.addFavourite = async (req, res) => {
    const { sub } = req.user;
    const { actID } = req.body;
    const params = {
        TableName: 'tonight-app-users',
        Item: {
            ID: sub,
            ActID: actID
        },
        ReturnValues: 'ALL_OLD'
    }

    try {
        const data = await db.put(params).promise();
        if (data.Attributes) {
            console.log('Already favourited');
            res.sendStatus(403);
        } else {
            res.sendStatus(201);
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({
            error: e
        });
    }
};