import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { deletePost, getPost, updatePost } from "../api/posts";
import { getUsers } from "../api/users";
import PostForm from "../components/PostForm";

function EditPost() {
  const { users, post, signal } = useLoaderData();

  return (
    <div className="container">
      <h1 className="page-title">Edit Post</h1>
      {<PostForm users={users} post={post} signal={signal} editForm={true} />}
      {/* <div className="center">
        <button className="btn red">
          Delete
        </button>
      </div> */}
    </div>
  );
}
async function loader({ params: { postId }, request: { signal } }) {
  return {
    users: await getUsers({ signal }),
    post: await getPost(postId, { signal }),
    signal,
  };
}

async function action({ params: { postId }, request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const userId = formData.get("userId");
  const body = formData.get("body");

  const post = await updatePost(
    postId,
    { title, userId, body },
    { signal: request.signal }
  );

  return redirect(`/posts/${post.id}`);
}

export const EditPostRoute = {
  element: <EditPost />,
  loader,
  action,
};
