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

const app = express();
const port = 2222;

app.use(express.json()); // Middleware to parse JSON
app.use('/auth', AuthenticationRoutes); // Route registration

app.listen(port, () => console.log("Our backend is running on port 2222"));
