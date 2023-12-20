
# Flask-React Authentication App


This is a full-stack authentication application built with Flask (backend) and React (frontend).The app provides user registration, login, and token-based authentication using JSON Web Tokens (JWT).
## Tech Stack

**Backend:** Flask, Flask-PyMongo, Flask-JWT-Extended, Flask-CORS

**Frontend:** React, React Router

**Database:** MongoDB



## Features

- **User Registration:** Users can register with their email, company name, phone number, and password.

- **User Login:** Secure login with email and password, utilizing bcrypt for password hashing.

- **Token-Based Authentication:** JSON Web Tokens are used for secure user authentication.

- **Logout:** Users can securely log out, with token invalidation on the server.


## Installation

Clone the Repository

```bash
  git clone https://github.com/Ajey23/Flask-React-Authentication-App.git

```
**Backend**
    
Navigate to the backend directory:
```bash
cd Flask-React-Authentication-App/backend
```

Create a virtual environment (optional but recommended):
```bash
python -m venv venv
```
Activate the virtual environment:
```bash
venv\Scripts\activate
```
Install Flask and other dependencies:
```bash
pip install -r requirements.txt
```

**Frontend**

Navigate to the frontend directory:
```bash
cd Flask-React-Authentication-App/admin
```
Install Node.js dependencies:
```bash
npm install
```
Start the React development server:
```bash
npm start
```

**MongoDB Setup**

1. Open MongoDB Compass.

2. Connect to your MongoDB server.

3. Create a new connection or use an existing one.

4. In the Compass UI, create a new database named **flask_react_app** and collection name is same as database name

## Screenshots
![Screenshot 2023-12-20 221026](https://github.com/Ajey23/Flask-React-Authentication-App/assets/93242997/ecdc25d2-9f31-48d1-b243-7344ca75e33f)

![Screenshot 2023-12-20 221116](https://github.com/Ajey23/Flask-React-Authentication-App/assets/93242997/c0b85f02-9c73-4953-800f-6b2b53e71a95)

![Screenshot 2023-12-20 221129](https://github.com/Ajey23/Flask-React-Authentication-App/assets/93242997/7edcbcb3-e7fc-43f8-b1ed-4e0e1f69fbab)

![Screenshot 2023-12-20 22145222](https://github.com/Ajey23/Flask-React-Authentication-App/assets/93242997/c7b6f93b-c6fe-4ef4-a1a9-b15d6859973f)

