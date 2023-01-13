import { createBrowserRouter } from "react-router-dom";
import Feed from "../Component/Feed";
import Profile from "../Component/Profile";
import Main from "../layout/Main";


export const route = createBrowserRouter([
  {
    path: "/",
    element: (
        <Main></Main>
    ),
    children: [
      {
        path: "/",
        element: <Feed></Feed>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
    ],
  },
]);