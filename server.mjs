// import express from 'express';
// import colors from 'colors';
// import connectDB from './config/db.js';
// import morgan from 'morgan';
// import dotenv from 'dotenv';
// import authRoutes from "./routes/authRoute.js";
// import cors from 'cors';
// import categoryRoutes from "./routes/categoryRoutes.js";
// import productRoutes from "./routes/productRoute.js";
// import path, { dirname } from "path";
// import {fileURLToPath} from 'url';


// // Configure environment variables
// dotenv.config();

// // Database Config
// connectDB();

// // es module fix

// const __filename = fileURLtoPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Create an Express app
// const app = express();


// // Middlewares
// app.use(cors());
// app.use(express.json());
// app.use(morgan('dev'));
// app.use(express.static(path.join(__dirname,"./client/build")))

// const port = process.env.PORT || 8000;

// // Routing
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/category", categoryRoutes);
// app.use("/api/v1/product", productRoutes);

// app.use("*",function(req,res){
//   res.sendFile(path.join(__dirname,"./client/build/index.html"));
// });

// app.listen(port, () => {
//   console.log(`Server is listening on mode ${process.env.MODE} and port ${port}`.bgCyan.white);
// });







// Import required modules using ESM syntax
import * as express from 'express';
import colors from 'colors';
import connectDB from './config/db.js';
import * as morgan from 'morgan';
import * as dotenv from 'dotenv';
import authRoutes from "./routes/authRoute.js";
import cors from 'cors';
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoute.js";
import * as path from 'path';
import { fileURLToPath } from 'url';

// Configure environment variables
dotenv.config();

// Database Config
connectDB();

// ESM module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an Express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "./client/build")));


const port = process.env.PORT || 8000;

// Routing
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server is listening on mode ${process.env.MODE} and port ${port}`.cyan);
});
