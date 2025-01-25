import { fetchPinterestPosts } from "./instance";

export const likePost = (postId, posts) => {
  const updatedPosts = posts.map((post) =>
    post.id === postId ? { ...post, likes: post.likes + 1 } : post
  );
  return updatedPosts;
};

export const commentOnPost = (postId, comment, posts) => {
  const updatedPosts = posts.map((post) =>
    post.id === postId
      ? {
          ...post,
          comments: [...post.comments, comment],
        }
      : post
  );
  return updatedPosts;
};

export const getPinterestPosts = async () => {
  const posts = await fetchPinterestPosts();
  return posts;
};

export const getPostById = (postId, posts) => {
  return posts.find((post) => post.id === postId);
};
