import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./User.js"

dotenv.config();

const app = express();
const PORT = 3000
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado com o MONGODB")

    } catch (error) {
        console.log("Erro ao conectar com o MONGODB", error)
    }

}

    connectDB()

    app.post("/users", async (req, res) => {
        try {
            const novoUsuario = await User.create(req.body)
            res.json(novoUsuario)

        } catch (error) {
            res.json({ error: error.message })


        }
    })
    
    app.listen(PORT, () => {
        console.log("O servidor está rodando na porta: ", PORT)
})