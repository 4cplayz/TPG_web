import mongoose from "mongoose";

const url = "mongodb+srv://tommyjamestremblay:5j7VmBs9Sg2xgZXx@cluster0.wfxpiop.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
  .then(() => {
    console.log("connected to dB")
  }).catch((error) => ( console.log("connection error")))

