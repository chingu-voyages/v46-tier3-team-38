const router = require("express").Router();

router.post('/forgetPassword', async (req, res) => {
    try {
        const email=req.body.email;
        res.sendStatus(200);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;