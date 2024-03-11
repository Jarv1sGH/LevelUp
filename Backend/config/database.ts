import mongoose from "mongoose";
export const connectToDatabase = () => {
  if (process.env.DB_URI)
    mongoose.connect(process.env.DB_URI).then(() => {
      console.log(`MongoDB connected with server: ${mongoose.connection.host}`);
    });
};

export default connectToDatabase;