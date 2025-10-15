import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware for logging requests
app.use((req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.originalUrl} - IP: ${req.ip}`);
  next();
});

//Rate Limiting Middleware
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 10, 
  message: {
    status: 'error',
    message: 'Too many requests from this IP, please try again later.',
  },
});

app.use(limiter);

app.use(cors());

//THE GET /me ENDPOINT
app.get('/me', async (req, res) => {
    try {
        const response = await axios.get("https://catfact.ninja/fact", {
            timeout: 5000, // 5 seconds timeout
        });

        const fact = response.data.fact;

        const data = {
            status: "success",
            user: {
                email: "nifetemiboy@gmail.com",
                name: "Temidayo Akanbi-Bello",
                stack: "Node.js/Express.js"
            },
            timestamp: new Date().toISOString(),
            fact: fact,
        };

        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching cat fact:", error.message);


        //if the external API fails, send fallback data
        const fallBackData = {
            status: "success",
            user: {
                email: "nifetemiboy@gmail.com",
                name: "Temidayo Akanbi-Bello",
                stack: "Node.js/Express.js"
            },
            timestamp: new Date().toISOString(),
            fact: "Cats are mysterious creatures - even API's can't keep up with them 🤕😭",
        };

        res.status(200).json(fallBackData);
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on PORT ${PORT}`)
})