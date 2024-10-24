import React from "react";
import { getAllUserPosts } from "../actions/posts";
import Post from "./Post";
import { article } from "@/types/types";

export default async function Posts({ userId }: { userId: string }) {
  const posts = await getAllUserPosts(userId);

  if (posts?.length == 0) {
    return (
      <div>
        <h1 className="text-center text-md font-medium">No posts</h1>
      </div>
    );
  }

  return (
    <div>
      {posts &&
        posts?.map((post: article) => {
          <Post post={post} key={post?.title} />;
        })}
    </div>
  );
}
