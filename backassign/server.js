const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');

const connectDB=require('./config/db');

const userRoutes=require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const { notFound, errorHandler } = require('./middlewares/errormiddleware');
const app=express();
dotenv.config();

connectDB();

//middlewares
app.use(cors());
app.use(express.json());

app.use(cookieParser());

//routes
app.use('/api/users',userRoutes);
app.get('/',(req,res)=>{
    res.send('API is running...');
}
);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
