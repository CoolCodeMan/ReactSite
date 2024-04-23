import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import "./index.css";
import Root from "./routes/root"
import ErrorPage from "./error-page";
import InfoPage from "./routes/infopage";
import Newsupdates from "./routes/newsupdates";
import Archives from "./routes/archives";
import Skills from "./routes/skills";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/infopage",
            element: <InfoPage />,
            errorElement: <ErrorPage />,

        },

        {
            path:"newsupdates",
            element: <Newsupdates />,
            errorElement: <ErrorPage/>,
        },

        {
            path:"archives",
            element: <Archives />,
            errorElement: <ErrorPage/>,
        },

        {
            path:"skills",
            element: <Skills />,
            errorElement: <ErrorPage/>,
        },


    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);