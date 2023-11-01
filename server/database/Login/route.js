const router = require("express").Router();

router.post('/login', async (req, res) => {
    try {
        const username=req.body.username;
        const pwd=req.body.pwd;
        res.status(200).send(true);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;