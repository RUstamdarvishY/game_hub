import { createBrowserRouter } from "react-router-dom";
import GameDetail from "./components/GameDetail";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>, 
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetail /> },
    ],
  },
]);

export default router;
