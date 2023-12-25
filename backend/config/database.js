process.env.DB_URI = "mongodb+srv://abhiatwe:Patronum%4013@panghruncluster0.znlllrv.mongodb.net/?retryWrites=true&w=majority";


const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log(`DB_URI: ${process.env.DB_URI}`);
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
