import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import Home from "@modules/Home";

const router = createBrowserRouter([
  {
    path: "/",
    id: "main-app",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
