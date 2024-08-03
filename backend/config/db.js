import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mjaa241330:0122011366@cluster0.yamr5mg.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}