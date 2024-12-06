import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./components/error/NotFound";
import AuthProvider from "./providers/AuthProvider";
import AllReviews from "./pages/AllReviews";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import ForgotPassword from "./pages/ForgotPassword";
import AddReview from "./pages/AddReview";
import MyReviews from "./pages/MyReviews";
import GameDetails from "./components/GameDetails/GameDetails";
import UpdateReview from "./components/UpdateReview/UpdateReview";
import MyWatchlist from "./pages/MyWatchlist";
import ReviewDetails from "./components/ReviewDetails/ReviewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <PublicRoute>
            <ForgotPassword />
          </PublicRoute>
        ),
      },
      {
        path: "/reviews",
        element: <AllReviews />,
        loader: async () => {
          const response = await fetch("https://chillgamerzz.vercel.app/games");
          const data = await response.json();
          return data;
        },
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const email = url.searchParams.get("email");
          const response = await fetch(`https://chillgamerzz.vercel.app/my-reviews?email=${email}`);
          const data = await response.json();
          return data;
        },
      },
      {
        path: "/add-review",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/game/:id",
        element: <GameDetails />,
        loader: async ({ params }) => {
          const response = await fetch(`https://chillgamerzz.vercel.app/games/${params.id}`);
          const data = await response.json();
          return data;
        },
      },
      {
        path: "/updateReview/:id",
        element: (
          <PrivateRoute>
            <UpdateReview />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch(`https://chillgamerzz.vercel.app/games/${params.id}`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          return data;
        },
      },
      {
        path: "/myWatchlist",
        element: (
          <PrivateRoute>
            <MyWatchlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/review/:id",
        element: <ReviewDetails />,
        loader: async ({ params }) => {
          const response = await fetch(`https://chillgamerzz.vercel.app/games/${params.id}`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          return data;
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);