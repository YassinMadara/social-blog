import { redirect, useLoaderData } from "react-router-dom";
import { createPost } from "../api/posts";
import { getUsers } from "../api/users";
import PostForm from "../components/PostForm";

function NewPost() {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="container">
      <h1 className="page-title">New Post</h1>
      {<PostForm users={users} />}
    </div>
  );
}

function loader({ request: { signal } }) {
  return getUsers({ signal });
}

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const userId = formData.get("userId");
  const body = formData.get("body");

  const post = await createPost(
    { title, body, userId },
    { signal: request.signal }
  );
  return redirect(`/posts/${post.id}`);
}

export const NewPostRoute = {
  element: <NewPost />,
  loader,
  action,
};
