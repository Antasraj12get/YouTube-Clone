// import express from 'express'
// import './Connection/connection.js';
// import AuthenticationRoutes from "./Routes/user.routes.js"


// var app = express();
// var port = 2222;

// app.use(express.json())
// app.use('/auth', AuthenticationRoutes)




// app.listen(port,()=> console.log("our backeing is running on 2222"))
import express from 'express';
import './Connection/connection.js';
import AuthenticationRoutes from "./Routes/user.routes.js";
import VideoRoutes from './Routes/video.routes.js'
// import User from '../models/user.model.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser())
const port = 2222;

app.use(express.json()); // Middleware to parse JSON
app.use('/auth', AuthenticationRoutes); // Route registration
app.use('/api', VideoRoutes);

app.listen(port, () => console.log("Our backend is running on port 2222"));
