import express, {type Express, type Request, type Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 7000;
//const dbUri = process.env.MONGODB_URI || "mongodb://localhost:27017/my-ts-api";

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
// mongoose
//   .connect(dbUri)
//   .then(() => console.log("Successfully connected to MongoDB."))
//   .catch((error) => {
//     console.error("Database connection error:", error);
//     process.exit(1);
//   });

// Simple API route
app.get("/", (req: Request, res: Response) => {
  res.send("API is running.");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
