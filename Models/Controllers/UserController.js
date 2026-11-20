const user = require("../Models/UserModel");

const SignupUser = async (req,res) => {
    try{
        const {name,email,password,confirm} = req.body;

        const newUser = new User({
            name,
            email,
            password,
        });
        const savedUser = await newUser.save();
        res.status(201).json({
            message: "User created successfully",
            error: error.message
        });

    }catch (error) {
        res.status()
    }
}
module.exports = {
        SignupUser,

}