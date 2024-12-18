import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://localhost:27017/pitchmeacoin` , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // 30 seconds
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDb;