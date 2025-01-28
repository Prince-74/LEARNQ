const express = require("express");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
//const colors = require("colors");
dotenv.config();


// mongodb connections calling 
connectDB();

 //Simulate an AI model function for quiz generation
function generateQuizFromLink(youtubeLink) {
  // This would be replaced by the actual AI model logic
  return [
    "What is the main topic of the video?",
    "Which key points were discussed?",
    "What was the duration of the video?",
    "Who was the speaker in the video?",
    "What is one actionable takeaway from the video?",
  ];
}

// Express App or rest object
const app = express();
app.use(bodyParser.json());
// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes Calling useing app.use
// app.use("/api/v1/test", require("./routes/testRoutes"));
// app.use("/api/v1/auth", require("./routes/authRoutes"));

// Server Listening and defineing ports

app.post('/generate-quiz', (req, res) => {
    const { youtubeLink } = req.body;
  
    if (!youtubeLink) {
      return res.status(400).json({ error: 'YouTube link is required' });
    }
  
    // Call the AI model function to generate a quiz
    try {
      const quiz = generateQuizFromLink(youtubeLink);
      res.status(200).json({ quiz });
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate quiz' });
    }
  });



const PORT = process.env.PORT || 8080;



app.listen(PORT, () => {
    console.log(
      `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
        .bgBlue.white
    );
  }); 