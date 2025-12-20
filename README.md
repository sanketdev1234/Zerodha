# S-Exchange

A full-stack stock trading platform built with React, Node.js, and Express.

##  Features

- **User Authentication & Authorization** - Secure login/signup with MFA support
- **Real-time Stock Trading** - Buy/sell stocks with live market data
- **Portfolio Management** - Track holdings, positions, and watchlists
- **Order Management** - Place, track, and manage trading orders
- **Dashboard Analytics** - Comprehensive trading insights and summaries
- **Responsive Design** - Modern UI that works on all devices

##  Project Structure

```
s-exchange/
├── backend/                 # Node.js/Express API server
│   ├── controller/         # API controllers
│   ├── middleware/         # Custom middleware
│   ├── model/             # Database schemas
│   ├── routes/            # API routes
│   └── Utilities/         # Helper utilities
├── dashboard/             # React dashboard application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── Context/       # React context providers
│   │   └── assets/        # Static assets
├── frontend/              # React landing page
│   ├── src/
│   │   ├── Landingpages/  # Landing page components
│   │   └── assets/        # Static assets
└── README.md
```

##  Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **bcrypt** - Password hashing

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Context API** - State management
- **CSS3** - Styling

##  Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd s-exchange
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install dashboard dependencies**
   ```bash
   cd ../dashboard
   npm install
   ```

4. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Setup

1. **Backend Environment Variables**
   Create a `.env` file in the `backend/` directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

2. **Frontend Environment Variables**
   Create a `.env` file in the `dashboard/` directory:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

2. **Start the dashboard**
   ```bash
   cd dashboard
   npm run dev
   ```

3. **Start the frontend landing page**
   ```bash
   cd frontend
   npm run dev
   ```

##  API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Trading Endpoints
- `POST /api/orders/buy` - Place buy order
- `POST /api/orders/sell` - Place sell order
- `GET /api/holdings` - Get user holdings
- `GET /api/positions` - Get user positions

### Watchlist Endpoints
- `GET /api/watchlist` - Get user watchlist
- `POST /api/watchlist/add` - Add stock to watchlist
- `DELETE /api/watchlist/remove` - Remove stock from watchlist

##  Development

### Code Style
- Use ESLint for code linting
- Follow consistent naming conventions
- Write meaningful commit messages

### Testing
```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd dashboard
npm test
```

##  Deployment

### Backend Deployment
1. Set up environment variables
2. Build the application
3. Deploy to your preferred hosting service (Heroku, AWS, etc.)

### Frontend Deployment
1. Build the production version
2. Deploy to static hosting (Netlify, Vercel, etc.)

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Support

If you encounter any issues or have questions, please:
1. Check the existing issues
2. Create a new issue with detailed information
3. Contact the development team

##  Acknowledgments

- Stock market data providers
- Open source community
- Contributors and maintainers

