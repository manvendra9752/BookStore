const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoute = require("./routes/book.route");
const userRoute = require("./routes/user.route");
const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 8080;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
  mongoose.connect(URI);
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
