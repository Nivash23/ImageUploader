const mongoose = require('mongoose');
const app=require('./Server')

const { Mongodb_url, Port } = require('./config');

mongoose.connect(Mongodb_url)
    .then(() => {
        console.log('Mongodb connected...')
        app.listen(Port, () => {
            console.log(`Server Listening to the port is ${Port}`)
        })
    })
    .catch((e) => {
    console.log(e)
})

