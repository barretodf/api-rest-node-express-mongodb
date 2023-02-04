import mongoose from "mongoose"


mongoose.connect("mongodb+srv://Projeto-Alura:OXFlCIj5z6KcXvLB@cluster0.7jizvjw.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;