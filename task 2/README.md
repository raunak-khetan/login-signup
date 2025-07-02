# Login-Signup & TODO App

A simple Node.js application with user authentication (login/signup) and a TODO list, using Express, MongoDB, JWT, and EJS.

## Features

- User registration and login with hashed passwords
- JWT-based authentication middleware
- Add, update, and delete TODO items
- EJS templating for frontend views

## Setup

1. **Clone the repository**

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory with the following:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. **Run the app**
   ```sh
   npm start
   ```
   Or for development with auto-reload:
   ```sh
   npm run dev
   ```

5. **Access the app**
   - Registration: `http://localhost:5000/api/register`
   - Login: `http://localhost:5000/api/login`
   - TODO List: `http://localhost:5000/api/todos`

## Project Structure

- `index.js` - Main server file
- `controller/` - Route controllers for auth and todos
- `middleware/` - JWT authentication middleware
- `models/` - Mongoose models for users and todos
- `views/` - EJS templates for frontend