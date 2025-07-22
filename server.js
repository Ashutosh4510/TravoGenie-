const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Route files
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const packageRoutes = require('./routes/packages');
const bookingRoutes = require('./routes/bookings');
const paymentRoutes = require('./routes/payment');
const adminRoutes = require('./routes/admin');

const { errorHandler } = require('./middleware/errorMiddleware');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Root route for browser testing
app.get('/', (req, res) => {
    res.send('API is working 🚀');
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/admin', adminRoutes);

// Error handler middleware
app.use(errorHandler);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`✅ Server running on port ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.error('❌ Failed to connect to MongoDB:', err.message);
});
