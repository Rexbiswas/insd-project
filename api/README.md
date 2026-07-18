# INSD Project - Core Backend

The robust, secure, and scalable backend powering the INSD Project website. Built with Node.js, Express, and MongoDB, this server handles lead management, user authentication, and secure data processing.

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (ES Modules)
- **Database**: MongoDB (via Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT) & Bcrypt.js
- **Validation**: Joi
- **Mail Service**: Nodemailer
- **Security**: 
  - Helmet (CSP headers)
  - Express Rate Limit (DDOS protection)
  - HPP (HTTP Parameter Pollution protection)
  - CORS (Cross-Origin Resource Sharing)

## 📁 Project Structure

```text
backend/
├── models/             # Mongoose Schemas (User, Leads, Admissions, etc.)
├── routes/             # API Route handlers
├── utils/              # Helper functions (email, validation, etc.)
├── server.js           # Main entry point & Middleware config
├── .env                # Environment variables (Internal)
└── package.json        # Dependencies and scripts/
```

## 🛠️ Installation & Setup

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the `backend/` folder with the following:
   ```env
   PORT=5001
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   
   # Email Config (Nodemailer)
   EMAIL_USER=your_email
   EMAIL_PASS=your_app_password
   ```

4. **Run the server**:
   - **Development**: `npm run dev` (uses nodemon)
   - **Production**: `npm start`

## 📡 API Endpoints Summary

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/api/health` | System health check |
| POST | `/api/auth/register` | User registration |
| POST | `/api/auth/login` | User authentication |
| POST | `/api/leads` | Generic lead submission |
| POST | `/api/step-leads` | Multi-step form leads |
| POST | `/api/admission` | Admission application submission |
| POST | `/api/paris` | Paris-related inquiries |
| POST | `/api/partner` | Partnership inquiries |

## 🛡️ Security Implementation

- **Software Firewall**: Custom Helmet configuration for Content Security Policy.
- **Rate Limiting**: Each IP is limited to 100 requests every 15 minutes to prevent abuse.
- **Data Validation**: All incoming requests are validated using Joi schemas before hitting the database.
- **Error Handling**: Graceful handling of unhandled rejections and exceptions.

---
© 2024 INSD Project Backend. All rights reserved.
