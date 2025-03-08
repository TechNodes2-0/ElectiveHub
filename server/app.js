const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoutes");
const StudentRoute = require("./Routes/StudentRoutes");
const SubjectRoute = require("./Routes/SubjectRoutes");
const StudentElectiveSubjectRoute = require("./Routes/StudentElectiveSubjectRoutes");
const { authMiddleware } = require("./Middleware/AuthMiddleware");
const axios = require("axios");
const FeedbackRoute = require("./Routes/FeedbackRoutes");

require("dotenv").config();
const { MONGO_URL, PORT } = process.env;
console.log(MONGO_URL);
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

const allowedOrigins = [
  "http://127.0.0.1:5173",
  "http://localhost:5173",
  "https://elective-subject-selector-pgtl.onrender.com",
  "https://electivehub.onrender.com",
  // Add more URLs as needed
];

app.use(cookieParser());

// Set up CORS with allowed origins and credentials
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

app.use("/auth", authRoute);
app.use(
  "/main",
  authMiddleware(["admin", "user", "student"]),
  StudentElectiveSubjectRoute
);
app.use("/student", authMiddleware(["admin", "user", "student"]), StudentRoute);
app.use("/subject", authMiddleware(["admin", "user", "student"]), SubjectRoute);

app.get("/yaae", authMiddleware(["admin", "user", "student"]), (req, res) => {
  res.json({ status: true, user: req.user });
});

app.use("/feedback", FeedbackRoute);

app.post("/subscribe-newsletter", async (req, res) => {
  try {
    const { email } = req.body;
    const publicationId = "64f31498352b1c82180c69aa"; // Your publication ID
    console.log(email, publicationId);

    const response = await axios.post(
      "https://electivehub.hashnode.dev/api/newsletter/subscribe",
      {
        email,
        publicationId,
      }
    );
    console.log(response);

    if (response.status === 200) {
      res
        .status(200)
        .json({ message: "Subscribed to the newsletter successfully!" });
    } else {
      res.status(500).json({ error: "Error subscribing to the newsletter" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error subscribing to the newsletter" });
  }
});

app.get("/", (req, res) => {
  res.send("dsjdnjsd");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
