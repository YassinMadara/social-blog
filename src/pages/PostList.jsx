import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PostComponent from "../components/PostComponent";
import SearchForm from "../components/SearchForm";

export default function PostList() {
  const { posts, query } = useLoaderData();
  return (
    <div className="container">
      <h1 className="page-title">Posts - {posts.length}</h1>
      <SearchForm query={query} />
      <br />
      <div className="card-grid">{<PostComponent posts={posts} />}</div>
    </div>
  );
}
