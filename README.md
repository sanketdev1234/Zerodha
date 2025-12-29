# S-Exchange

A full-stack stock trading platform built with React, Node.js, and Express.

##  Features

- **User Authentication & Authorization** - Secure login/signup with MFA support
- **virtual Stock Trading** - Buy/sell stocks with dumy market data
- **Portfolio Management** - Track holdings, positions, and watchlists
- **Order Management** - Place, track, and manage trading orders
- **Dashboard Analytics** - Comprehensive trading insights and summaries
- **Responsive Design** - Modern UI that works on all devices
-  **Learning for Beginner** - Modern UI that provide the quizes and tutorials for stock market related topic
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
- **Passportjs** - Authentication
- **speakeasy** - MFA

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **CSS3** - Styling

##  Getting Started

### Prerequisites
- Node.js (v16 or higher)
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
   PORT=8080
   ATLAS_DBURL=your_mongodb_connection_string
   SECRET=your_jwt_secret
   GEMINI_API_KEY=you gemini api key
   ```

2. **Frontend Environment Variables**
   Create a `.env` file in the `Frontend/` directory:
   ```env
   VITE_API_URL
   VITE_DASHBOARD_URL
   ```
3. **Backend Environment Variables**
   Create a `.env` file in the `Dashboard/` directory:
   ```env
   VITE_API_URL=dumy stock market data api url
   VITE_API_KEY
   VITE_API_BACKEND_URL
   VITE_FRONTEND_URL
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



<img width="1868" height="814" alt="image" src="https://github.com/user-attachments/assets/bdd78944-ea06-4524-a768-e0698ce7f633" />
<img width="1915" height="891" alt="Screenshot 2025-12-29 221632" src="https://github.com/user-attachments/assets/4f0c1409-f145-4f4d-87ae-c7e3a40e2aec" />
<img width="1330" height="676" alt="Screenshot 2025-12-29 221700" src="https://github.com/user-attachments/assets/64889af4-20b9-4776-9a18-258c5ef73379" />
<img width="1256" height="870" alt="image" src="https://github.com/user-attachments/assets/91fce6f9-3b56-48f5-95ed-9379b8edbeca" />
<img width="1890" height="901" alt="image" src="https://github.com/user-attachments/assets/03888c54-4a98-49de-a3a2-2030965b920e" />
<img width="1919" height="1016" alt="image" src="https://github.com/user-attachments/assets/43e5ba8e-7946-435d-abb2-2eef1227d66f" />
<img width="1394" height="763" alt="image" src="https://github.com/user-attachments/assets/74105bf9-204a-47b2-89b2-b9b3d31bc463" />






