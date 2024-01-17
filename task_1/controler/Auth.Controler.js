const bcryptjs = require('bcryptjs'); 
const user = require('../modals/user.Modal'); 


// sign up process
const register = async (req, res) => {
    try {
        const { name, username, age, gender, email, password, terms_and_condition } = req.body;
        const hashPassword = await bcryptjs.hash(password, 10) //encrypting the password 
        
        // create the user in MongoDB
        const newUser = new user({
            name,
            age,
            username,
            gender,
            email,
            password: hashPassword,
            terms_and_condition,
        });
        await newUser.save();
        res.status(200).send("regester sucess login the page");
        res.redirect('/users/login')
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
};

module.exports = register;
