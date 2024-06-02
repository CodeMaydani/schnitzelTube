import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home, { loader as homeLoader } from "./pages/Home";
import Login from "./pages/Login";
import WatchVideo from "./pages/ViewVideo";
import NotFound from "./pages/NotFound";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "./components/theme-provider";
import { AuthProvider } from "./contexts/AuthContext";
import RequireAnonimus from "./pages/RequireAnominus";
import VideoUpload from "./pages/VideoUpload";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/video-upload",
        element: <VideoUpload />,
      },
      {
        path: "/login",
        element: (
          <RequireAnonimus>
            <Login />
          </RequireAnonimus>
        ),
      },
      {
        path: "/watch/:id",
        element: <WatchVideo />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider storageKey="vite-ui-theme">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
