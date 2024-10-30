const mongoose = require("mongoose");

const conn = async (req, res) => {
 try {
    await mongoose
    .connect(
      "mongodb+srv://muiz:m123@cluster0.lzbrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("MongoDB Connected");
    });
 } catch (error) {
    res.status(400).json({message:"Not Connected"})
 }
};
conn();
