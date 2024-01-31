import { createBrowserRouter, Navigate } from "react-router-dom";
import ParentLayout from "./layouts/ParentLayout";
import PostList from "./pages/PostList";
import UserList from "./pages/UserList";
import TodosList from "./pages/TodosList";
import Post from "./pages/Post";
import User from "./pages/User";

import { getPost, getPosts } from "./api/posts";
import { getUser, getUsers } from "./api/users";
import { getTodos } from "./api/todos";

import "./styles.css";
import UnvalidURL from "./pages/UnvalidURL";
import ErrorPage from "./pages/ErrorPage";

function getQuery(url, paramName) {
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
      { index: true, element: <Navigate to="posts" /> },
      { path: "/*", element: <UnvalidURL /> },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: <PostList />,
            loader: async ({ request: { signal, url } }) => {
              const query = getQuery(url, "query");
              return {
                posts: await getPosts({ signal, params: { q: query } }),
                query,
              };
            },
          },
          {
            path: ":postId",
            element: <Post />,
            loader: async ({ params, request: { signal } }) => {
              const post = await getPost(params.postId, { signal });
              const user = getUser(post.userId, { signal });

              return {
                post,
                user: await user,
              };
            },
          },
        ],
      },
      {
        path: "users",
        children: [
          {
            index: true,
            element: <UserList />,
            loader: async ({ request: { signal, url } }) => {
              const query = getQuery(url, "query");
              return {
                users: await getUsers({ signal, params: { q: query } }),
                query,
              };
            },
          },
          {
            path: ":userId",
            element: <User />,
            loader: ({ params, request: { signal } }) => {
              return getUser(params.userId, signal);
            },
          },
        ],
      },
      {
        path: "todos",
        element: <TodosList />,
        loader: async ({ request: { signal, url } }) => {
          const searchParams = new URL(url).searchParams;
          const query = searchParams.get("query");
          const filteredParams = { q: query };
          return {
            todos: await getTodos({ signal, params: filteredParams }),
            query,
          };
        },
      },
    ],
  },
]);
