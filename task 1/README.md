# User Authentication App

This is a simple Node.js application for user authentication, featuring signup and login functionality. The app uses Express.js for the server, EJS for templating, and a basic file-based model for storing user data.

## Project Structure

```
task 1/
  controller/
    controller.js         # Handles business logic for authentication
  index.js                # Entry point of the application
  models/
    users.js              # User data model
  views/
    login.ejs             # Login page template
    signup.ejs            # Signup page template
  package.json            # Project dependencies and scripts
  package-lock.json       # Dependency lock file
```

## Features

- User signup
- User login
- EJS templating for views

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)

### Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory:
   ```bash
   cd "task 1"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

```bash
node index.js
```

The app will start on the default port (usually 3000). Open your browser and navigate to `http://localhost:3000`.

## License

This project is for educational purposes.
