const router = require("express").Router();

router.post('/signUp', async (req, res) => {
    try {
        const email=req.body.email;
        const password=req.body.password;
        res.sendStatus(200);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;