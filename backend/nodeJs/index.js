const express = require("express");
const connectDB = require("./src/config/db");
const userProfileRoutes = require("./src/Routes/userProfileRoutes");
const authRoutes = require("./src/Routes/authRoutes");
const profileRoutes = require("./src/Routes/ProfileRoutes");
const app = express();
const port = 5000;
connectDB();
app.use(express.json());

app.use("/user", userProfileRoutes);
app.use("/api/auth/", authRoutes);

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use("/api/profile", profileRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const Connect_to_MongoDB = require("./src/config/db");
// const userProfileRoutes = require("./src/Router/userProfileRoutes");

// const express = require("express");

// const app = express();
// const port = process.env.port; // Define your port

// Connect_to_MongoDB();

// app.use(express.json());

// app.use('/userProfileRoutes', userProfileRoutes);
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// const express = require('express');
// const mongoose = require('mongoose');
// const userRoutes = require('./routes/userRoutes');
// const productRoutes = require('./routes/productRoutes');
// const orderRoutes = require('./routes/orderRoutes');
// const reviewRoutes = require('./routes/reviewRoutes');
// const categoryRoutes = require('./routes/categoryRoutes');
// const cartRoutes = require('./routes/cartRoutes');
// const wishlistRoutes = require('./routes/wishlistRoutes');
// const addressRoutes = require('./routes/addressRoutes');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// app.use(express.json());
// app.use('/api', userRoutes);
// app.use('/api', productRoutes);
// app.use('/api', orderRoutes);
// app.use('/api', reviewRoutes);
// app.use('/api', categoryRoutes);
// app.use('/api', cartRoutes);
// app.use('/api', wishlistRoutes);
// app.use('/api', addressRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
