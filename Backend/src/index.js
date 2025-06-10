import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB from './db/DB.js';
dotenv.config();

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
        app.on('error', (err) => {
            console.error('Server error:', err);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to the database:', err);
        process.exit(1); // Exit the process with failure
    });
    

