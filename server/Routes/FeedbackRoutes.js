const router = require("express").Router();
const {
  addFeedback,
  getFeedback,
} = require("../Controllers/FeedbackController");
router.post("/addFeedback", addFeedback);
router.get("/getFeedback/:subjectCode", getFeedback);
module.exports = router;
