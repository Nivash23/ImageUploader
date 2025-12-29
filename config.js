require('dotenv').config();

const Mongodb_url = process.env.MONGODB_URL;
const Port = process.env.PORT;

module.exports={Mongodb_url,Port}