# Full Authentication System (MERN)

A full authentication system built using the **MERN** stack (MongoDB, Express, React / Next.js, Node.js / TypeScript) that includes user registration, login, protected routes, etc.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Environment Variables](#environment-variables)  
- [Running the Project](#running-the-project)  
- [API Endpoints](#api-endpoints) _(if applicable)_  
- [Folder Structure](#folder-structure)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- Register / Login users  
- Password hashing  
- JWT-based authentication  
- Protected routes  
- Possibly email verification, password reset (if your project includes them)  
- Error handling, etc.

---

## Tech Stack

- **Backend**: Node.js, Express.js, TypeScript  
- **Frontend**: React or Next.js (based on your repo)  
- **Database**: MongoDB  
- **Authentication**: JWT (JSON Web Tokens)  
- **Other**: dotenv for environment variables  

---

## Prerequisites

Make sure you have the following installed on your development machine:

- Node.js (v16+ recommended)  
- npm or yarn  
- MongoDB (local or cloud service)  
- Git  

---

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/bharath-kalkote23/Full-Authentication-System-MERN.git
    cd Full-Authentication-System-MERN
    ```

2. Install dependencies:

    ```bash
    # if using npm
    npm install

    # or using yarn
    yarn install
    ```

3. Set up environment variables (see below).

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. For production build (if applicable):

    ```bash
    npm run build
    npm start
    # or using yarn
    yarn build
    yarn start
    ```

---

## Environment Variables

Create a `.env` file in the root directory (or wherever your project expects it) with the following variables. Replace the placeholder values with your own.
