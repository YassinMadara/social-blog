import React from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { deletePost } from "../api/posts";

export default function PostForm({ users, post = {}, editForm }) {
  const navigate = useNavigate();
  async function deleting() {
    await deletePost(post.id);
    return navigate("/");
  }

  return (
    <Form method="post" className="form">
      <div className="form-row">
        <div className="form-group ">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={post.title}
          />
          {/* <div className="error-message">Required</div> */}
        </div>
        <div className="form-group">
          <label htmlFor="userId">Author</label>
          <select name="userId" id="userId" defaultValue={post.userId}>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body" defaultValue={post.body}></textarea>
        </div>
      </div>
      <div className="form-row form-btn-row">
        <Link className="btn btn-outline" to="..">
          Cancel
        </Link>
        <button className="btn">Save</button>
        {editForm && (
          <button onClick={deleting} className="btn red">
            Delete
          </button>
        )}
      </div>
    </Form>
  );
}
