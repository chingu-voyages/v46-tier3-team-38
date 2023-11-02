const { insertUserData } = require("./signUp");


const router = require("express").Router();

router.post('/signUp', async (req, res) => {
    console.log(req.body);
    try {
        const userData={
            username:req.body.username,
            password:req.body.pwd
        }
        await insertUserData(userData);
        res.status(200).send(true);
    } catch (error) {
        console.log(error.toString());
        console.log(error.toString()==='Error: Username already exists');
        if(error.toString()==='Error: Username already exists'){
            res.status(409).send(error);
        }else{
            res.status(400).send(error);
        }
       
    }
});

module.exports = router;