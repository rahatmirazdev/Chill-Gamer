# ✨ Chill Gamer: A Game Review Application

Chill Gamer is a user-friendly web application designed to help gamers explore and share game reviews effortlessly. With features like user authentication, review management, and a clean, responsive UI, Chill Gamer ensures a "chill" and engaging experience for all users.

## 🌄 Project Overview

Chill Gamer provides a platform where users can browse, add, and manage reviews for their favorite games. The application is designed to be intuitive and responsive, ensuring a seamless experience across devices.

## 🚀 Live Link

[Visit Chill Gamer Live](https://chill-gamerzz.web.app/)

## 🎮 Main Technologies Used

- **React**: For building a dynamic and responsive user interface.
- **Firebase Authentication**: For secure user registration and login.
- **MongoDB**: To store and manage user data and game reviews.
- **Tailwind CSS**: A utility-first CSS framework for modern, responsive design.
- **React Toastify**: For displaying success and error notifications.
- **React Router**: For seamless navigation between pages.

## 🌟 Key Features

### 🔑 User Authentication

- Secure registration and login using email and password.
- Google sign-in for quick access.

### 🎮 Game Reviews

- View all reviews with game details including:
    - Title, cover image, and description.
    - Rating, genres, and publishing year.
    - Reviewer’s name and email.
- Add and manage reviews:
    - Submit new reviews via a detailed form.
    - Update or delete your reviews.

### 🔍 Watchlist

- Save games to your watchlist for future reference.
- Manage your watchlist with ease.

### 🔦 Responsive Design

- Fully responsive UI for a seamless experience on mobile, tablet, and desktop devices.

## 🛠️ Installation Guide

Follow these steps to run Chill Gamer on your local machine:

1. Clone the repository:
     ```bash
     git clone https://github.com/rahatmirazdev/Chill-Gamer.git
     ```
2. Navigate to the project directory:
     ```bash
     cd chill-gamer
     ```
3. Install dependencies:
     ```bash
     npm install
     ```
4. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add your Firebase configuration and MongoDB credentials:
      ```plaintext
      VITE_API_KEY=your_firebase_api_key
      VITE_AUTH_DOMAIN=your_firebase_auth_domain
      VITE_PROJECT_ID=the_id
      VITE_STORAGE_BUCKET=storageBucket
      VITE_MESSAGING_SENDER_ID=messagingSenderId
      VITE_APP_ID=appId
      ```
5. Start the development server:
     ```bash
     npm run dev
     ```
6. Open your browser and visit `http://localhost:3000` to view the application.

## 📅 Dependencies

Here are the main dependencies used in the project:

- `react`
- `firebase`
- `mongodb`
- `tailwindcss`
- `react-toastify`
- `react-router-dom`

Enjoy discovering and sharing game reviews with Chill Gamer!
