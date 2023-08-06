const mongoose = require('mongoose')

const connect_db = async () => {

    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`database URl is :  ${connect.connection.host}`.yellow.underline)

    } catch (error) {

        console.log(`${error}`.red.underline)

    }
}

module.exports = connect_db

