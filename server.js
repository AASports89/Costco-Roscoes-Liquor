// REAL IMPORT
import express from 'express';
import cors from 'cors';
import  dotenv from 'dotenv/config';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

// IMPORTED FROM FOLDERS
// import { connectDB } from './config/connection.js';
import { authRouter } from './routes/authRoutes.js'
import userRouter from './routes/userRoute.js';

const app = express();
const PORT = process.env.PORT || 3001;
export const connectDB = async () => {
    try{
        const connection = await mongoose.connect(`${'mongodb://localhost:27017/shell-gas-db'}/mern-auth`).then(() => {
          console.log('MONGODB connected successfully');
        }
        )
    }
    catch(err){
         console.log('MongoDB connection failed',err);
    }
}
// connectDB();

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost:27017/shell-gas-db',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
  
// );

const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:3000',
  // 'http://localhost:3001',
  'https://mern-authentication-system-jw.vercel.app',
  'https://mern-authentication-system-using-jwt-and.vercel.app'
];

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like curl, mobile apps)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Api Endpoints
app.get('/', (req, res) => {   
    res.send('<h1>Hello World!</h1>');
})
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.listen(PORT, ()=> {
    console.log(`server is running on port http://localhost:${PORT}`);
}
)