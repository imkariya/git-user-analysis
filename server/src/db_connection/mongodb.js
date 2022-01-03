import mongoose from 'mongoose';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const dbURL = process.env.MONGO_DB_URL;

mongoose.connect(dbURL, options);

mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection is open to ', dbURL);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose default connection has occured ${err} error`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log(
            'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

export default mongoose.connection;
