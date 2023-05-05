const User = require('../models/user')
const jwt_decode = require('jwt-decode');

const dashBoardData = async(req, res)=>{
    const { tokenMail } = req.body;
    // console.log(tokenMail);
    try {
        const decodedTokenMail = jwt_decode(tokenMail, process.env.JWT_KEY);
        const email = decodedTokenMail.email;
        console.log('decoded email', email);
        const user = await User.findOne({email: email});
        const userData = {
            name: user.name,
            role: user.role,
            bio: user.bio,
            avatar: user.avatar,
            handle: user.handle,
            links: user.links.length
        }
        return res.json({message: 'User loaded', userData, status: 'Okay'})
    } catch (err) {
        return res.json({status: 'error', error: err.message})
    }
}

module.exports = { dashBoardData };