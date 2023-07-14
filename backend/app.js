const express = require('express')
const appRoutes = require('./routes/appRoutes')
const bodyParser = require('body-parser');
const cors = require('cors')
// const cors = require("cors");

const app = express();
app.use(cors())

// const corsOptions = {
//   origin: "http://localhost:8000"
// };

// app.use(cors(corsOptions));

const PORT= process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set("view engine", 'ejs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/", appRoutes )

app.listen(PORT, ()=> {console.log(`Server is listening on port ${PORT}`);})