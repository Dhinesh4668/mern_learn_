const allowOrigins = require('./allowOrgins')

const corsOptions = {
    origin: (origin, callback) =>{
        if(allowOrigins.indexOf(origin)!==-1 || !origin){
            callback(null, true)
        }else{
            callback(new Error('not allowed by cors'))
        }
    },
    Credential: true,
    optionsSucessStatus: 200,
}


module.exports = corsOptions