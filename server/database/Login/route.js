const router = require("express").Router();
const {checkUsernameAndPasswordMatch}=require('./login');

router.post('/login', async (req, res) => {
    try {
        const userData={
            username:req.body.username,
            password:req.body.pwd
        }
        const token=await checkUsernameAndPasswordMatch(userData);
        res.status(200).send(token);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;