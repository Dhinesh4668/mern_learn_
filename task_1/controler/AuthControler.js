const bcryptjs = require('bcryptjs'); 
const user = require('../modals/userModal'); 


// sign up process
const register = async (req, res) => {
    try {
        // validate the user input (you might want to add more validation)
        const { name, username, age, gender, email, password } = req.body;

        // create the user in MongoDB
        const newUser = new user({
            name,
            age,
            username,
            gender,
            email,
            password
        });

        await newUser.save();
        res.status(200).send("regester sucess login the page");
        // res.redirect('/user/regester')
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
};

module.exports = register;
