const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoute = require ('./routes/auth');
const userRoute = require ('./routes/user')
dotenv.config();
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/v1/auth", authRoute);
app.use("/v1/user",userRoute);
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Đã kết nối MongoDB');
    app.listen(8000, () => {
      console.log('Server đã chạy');
    });
  })
  .catch(error => {
    console.error('Lỗi kết nối MongoDB:');
  });



