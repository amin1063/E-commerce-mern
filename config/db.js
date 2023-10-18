import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to MongoDB Database on host: ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.error(`Error in MongoDB connection: ${error}`);
    }
};

export default connectDB;
