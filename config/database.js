const mongoose = require("mongoose");

const config = require("./configEnviroment")

exports.mongoConnect = () =>{
    //const mongoStringConnectiont =`mongodb+srv://${config.USER_MONGO}:${config.PASS_MONGO}@cluster0.ainyd.mongodb.net/${config.BD}?retryWrites=true&w=majority`;
    const mongoStringConnection = `mongodb://${config.HOST}:${config.PORT_BD}/${config.BD}`
    mongoose.connect(mongoStringConnection);
    mongoose.Promise =global.Promise;
    const dbConnection =mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "error en la conexion de mongodb"))
    
}