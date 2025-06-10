import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);        
        console.log(`Database connected successfully: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`Database connection failed: ${error}`);
        // Error while connecting to the database
        process.exit(1); // Exit the process with failure
    }
}
export default connectDB
