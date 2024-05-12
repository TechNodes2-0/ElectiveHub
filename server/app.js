const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoutes");
const StudentRoute = require("./Routes/StudentRoutes");
const SubjectRoute = require('./Routes/SubjectRoutes');
const StudentElectiveSubjectRoute = require('./Routes/StudentElectiveSubjectRoutes');
const { authMiddleware } = require("./Middleware/AuthMiddleware");
const axios = require('axios')


// GOOGLE OAUTH DEPENDENCIES 
const session = require("express-session")
const passport = require("passport")
const OAuth2Strategy = require("passport-google-oauth2")
// const clientid = "757009061508-5lfqsvumlf633amcgm3pee4127ga2fek.apps.googleusercontent.com"; // THIS IS JAY DOSHI'S CILENT ID CHANGE IT TO YOURS
// const clientsecret = "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"; // THIS IS JAY DOSHI'S CLIENT SECRET KEY CHANGE IT TO YOURS  
const userdb = require("./Models/userSchema")

require("dotenv").config();
const { MONGO_URL, PORT } = process.env;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));
const allowedOrigins = [
  "http://127.0.0.1:5173",
  "http://localhost:5173",
  "https://elective-subject-selector-pgtl.onrender.com",
  "https://electivehub.onrender.com"
  // Add more URLs as needed
];
app.use(cookieParser());
app.use(express.json())
app.use(
  cors({
    origin: allowedOrigins,
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);


//   const corsOrigin ={
//     origin:'http://127.0.0.1:5173', //or whatever port your frontend is using
//     credentials:true,
//     optionSuccessStatus:200
// }
// app.use(cors(corsOrigin));

// MIDLLEWARES AND BACKED FOR GOOGLE LOGIN STARTS HERE 
app.use(session({
  secret: "YOUR SECRET KEY",
  resave: false,
  saveUninitialized: true
}))

// setuppassport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy({
    clientID: clientid,
    clientSecret: clientsecret,
    callbackURL: "/auth/google/callback",
    scope: ["profile", "email"]
  },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await userdb.findOne({ googleId: profile.id });

        if (!user) {
          user = new userdb({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value
          });

          await user.save();
        }

        return done(null, user)
      } catch (error) {
        return done(error, null)
      }
    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user);
})

passport.deserializeUser((user, done) => {
  done(null, user);
});

// initial google ouath login
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));


app.get("/auth/google/callback", passport.authenticate("google", {
  successRedirect: "http://localhost:5173/Home",
  failureRedirect: "http://localhost:5173/Login"
}))


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

app.post("/subscribe-newsletter", async (req, res) => {
  try {
    const { email } = req.body;
    const publicationId = "64f31498352b1c82180c69aa"; // Your publication ID
    console.log(email);
    console.log(publicationId);
    // Make the API call to subscribe to the newsletter
    const response = await axios.post(
      "https://electivehub.hashnode.dev/api/newsletter/subscribe",
      {
        email,
        publicationId,
      }
    );
    console.log(response);
    // Handle the response from the API call
    if (response.status === 200) {
      res.status(200).json({ message: "Subscribed to the newsletter successfully!" });
    } else {
      res.status(500).json({ error: "Error subscribing to the newsletter" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error subscribing to the newsletter" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("dsjdnjsd");
});
