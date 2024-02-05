import { createBrowserRouter, Navigate } from "react-router-dom";
import ParentLayout from "./layouts/ParentLayout";
import { PostListRoute } from "./pages/PostList";
import { UserListRoute } from "./pages/UserList";
import { TodoListRoute } from "./pages/TodosList";

import { PostRoute } from "./pages/Post";
import { UserRoute } from "./pages/User";

import UnvalidURLPage from "./pages/UnvalidURLPage";
import ErrorPage from "./pages/ErrorPage";
import "./styles.css";

export function getQuery(url, paramName) {
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get(paramName);
  return query;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ParentLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="posts" /> },
          { path: "*", element: <UnvalidURLPage /> },
          {
            path: "posts",
            children: [
              {
                index: true,
                ...PostListRoute,
              },
              {
                path: ":postId",
                children: [
                  {
                    index: true,
                    ...PostRoute,
                  },
                  ,
                ],
              },
              { path: "new", element: <h1>h1</h1> },
            ],
          },
          {
            path: "users",
            children: [
              {
                index: true,
                ...UserListRoute,
              },
              {
                path: ":userId",
                ...UserRoute,
              },
            ],
          },
          {
            path: "todos",
            ...TodoListRoute,
          },
        ],
      },
    ],
  },
]);
