# S-Exchange - Full Stack Trading Simulation

A comprehensive trading platform clone built with React, Node.js, and MongoDB.

## 🏗️ Project Structure

```
S-Exchange/
├── backend/          # Node.js + Express API
├── frontend/         # React landing pages
├── dashboard/        # React trading dashboard
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd S-Exhange
   ```

2. **Install dependencies for all projects**
   ```bash
   # Backend
   cd backend
   npm install
   
   # Frontend
   cd ../frontend
   npm install
   
   # Dashboard
   cd ../dashboard
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Backend
   cd backend
   cp env.example .env
   # Edit .env with your configuration
   
   # Frontend (if needed)
   cd ../frontend
   # Create .env if needed
   
   # Dashboard (if needed)
   cd ../dashboard
   # Create .env if needed
   ```

4. **Start Development Servers**
   ```bash
   # Backend (Port 8080)
   cd backend
   npm run dev
   
   # Frontend (Port 3000)
   cd ../frontend
   npm run dev
   
   # Dashboard (Port 3001)
   cd ../dashboard
   npm run dev
   ```

## 🌐 Deployment

### Option 1: Vercel + Render

#### Frontend & Dashboard (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy frontend and dashboard

#### Backend (Railway/Render)
1. Connect GitHub repository
2. Set environment variables
3. Deploy backend


## 📝 API Documentation

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Trading
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Place new order
- `GET /api/holdings` - Get user holdings
- `GET /api/positions` - Get user positions

## 📄 License

This project is for educational purposes only.

