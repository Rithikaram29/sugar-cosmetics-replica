import mongoose from "mongoose";

const mongoUri = "mongodb+srv://rithikaram293:Natty8mem@cluster0.wok3z.mongodb.net/sugarcosmetics?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri);

        console.log("Connected to MongoDB!")
    } catch (error) {
        console.log(`Error connecting to MongoDb: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;