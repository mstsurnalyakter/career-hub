import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AppliedJobs from "../pages/AppliedJobs";
import ErrorPage from "../pages/ErrorPage";
import JobDetails from "../pages/JobDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <JobDetails />,
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
      },
    ],
  },
]);