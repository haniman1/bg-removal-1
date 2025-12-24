import express from "express";
import cors from "cors";
import connectDB from "./configs/mongoDB.js";
import userRouter from "./routes/userRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());


//api routes
app.get("/", (req, res) => res.send("API working"));
app.use("/api/user", userRouter);

const startServer = async () => {
  await connectDB(); 
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();